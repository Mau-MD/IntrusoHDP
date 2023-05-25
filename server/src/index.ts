import express from "express";
import cors from "cors";
import { Server, Socket } from "socket.io";
import { createServer } from "http";

const port = 3000;
const app = express();

// socket setup
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("join", (room) => {
    console.log("Joined room", room);
  });
  socket.on("message", (data) => {
    console.log(data);
  });
  socket.on("apagar", () => {
    console.log("apagando");
  });
});

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/putos", (req, res) => {
  res.send("Hello World! y putos");
});

// app.listen(port, () => {
// console.log(`Server running at http://localhost:${port}`);
// });
httpServer.listen(port);
