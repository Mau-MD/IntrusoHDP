import express from "express";
import cors from "cors";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { usersController } from "./controllers/usersController";

//api setup
const port = 3000;
const app = express();

// socket setup
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  socket.on("join", (room) => {
    console.log("Joined room", room);
  });
  socket.on("message", (data) => {
    console.log(data);
  });
});

app.use(cors());
app.use(express.json());

app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.listen(port, () => {
// console.log(`Server running at http://localhost:${port}`);
// });
httpServer.listen(port);
