import express from "express";
import cors from "cors";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { usersController } from "./controllers/usersController";

const port = 3000;
const app = express();

type status = "HDP detectado" | "HDP todo bien";

let state: status = "HDP detectado";

// socket setup
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("apagar", () => {
    handleApagar(socket);
  });
  socket.on("encender", () => {
    handleEncender(socket);
  });
});

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

httpServer.listen(port);

const handleApagar = (socket) => {
  if (state === "HDP detectado") {
    state = "HDP todo bien";
    socket.send("HDP todo bien");
  }
};

const handleEncender = (socket) => {
  if (state === "HDP todo bien") {
    state = "HDP detectado";
    socket.send("HDP detectado");
  }
};
