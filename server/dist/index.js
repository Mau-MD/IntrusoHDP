import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/putos", (req, res) => {
    res.send("Hello World! y putos");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map