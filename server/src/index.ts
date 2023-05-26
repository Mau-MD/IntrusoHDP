import express from "express";
import cors from "cors";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { usersController } from "./controllers/usersController";

const port = 3000;
const app = express();

type status = "off" | "on";

type alarma = "off" | "on";

let state: status = "off";
let alarma: alarma = "off";

// socket setup
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("apagar", () => {
    handleApagarSistema(socket);
  });
  socket.on("encender", () => {
    handleEncenderSistema(socket);
  });
  socket.on("encenderAlarma", () => {
    handleEncenderAlarma(socket);
  });
  socket.on("apagarAlarma", () => {
    handleApagarAlarma(socket);
  });
});

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

httpServer.listen(port);

const handleApagarSistema = (socket) => {
  state = "off";
  socket.emit("off");
};

const handleEncenderSistema = (socket) => {
  state = "on";
  socket.emit("on");
};

const handleEncenderAlarma = (socket) => {
  alarma = "on";
  socket.emit("alarma_on");
};

const handleApagarAlarma = (socket) => {
  alarma = "off";
  socket.emit("alarma_off");
};
