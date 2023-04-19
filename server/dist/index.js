import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
//api setup
const port = 3000;
const app = express();
// socket setup
const httpServer = createServer(app);
const io = new Server(httpServer, {
/* options */
});
io.on("connection", (socket) => {
    socket.on("message", (data) => {
        console.log(data);
    });
});
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/putos", (req, res) => {
    res.send("Hello World! y putos");
});
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
httpServer.listen(port);
//# sourceMappingURL=index.js.map