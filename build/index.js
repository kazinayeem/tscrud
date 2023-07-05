"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const middleware = [
    (0, morgan_1.default)("dev"),
    (0, cors_1.default)(),
    express_1.default.json(),
    express_1.default.urlencoded({ extended: false }),
];
app.use(middleware);
app.get("/", (req, res) => {
    res.send("<h1>Hello welcome to my website ts</h1>");
});
app.post("/post", async (req, res) => {
    console.log(req.body);
    return res.status(200).send({
        message: "Hello World from post!",
    });
});
app.use("/todo/", routes_1.defaultRoute);
app.use((err, req, res, next) => {
    const message = err.message ? err.status : "this error is from server.ts";
    const status = err.status ? err.status : 500;
    res.status(status).json({
        message: message,
    });
});
app.listen(3002, () => {
    (0, db_1.db)().then((r) => console.log("server is running port 3002"));
});
//# sourceMappingURL=index.js.map