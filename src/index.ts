import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import { db } from "./config/db";
import { defaultRoute } from "./routes/routes";
const app: Application = express();
import dotenv from "dotenv";


dotenv.config();
const middleware = [
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: false }),
];

app.use(middleware);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello welcome to my website ts</h1>");
});
app.post("/post", async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  return res.status(200).send({
    message: "Hello World from post!",
  });
});
app.use("/todo/", defaultRoute);

interface CustomError extends Error {
  status?: number;
}

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const message = err.message ? err.status : "this error is from server.ts";
  const status = err.status ? err.status : 500;
  res.status(status).json({
    message: message,
  });
});

app.listen(3002, () => {
  db().then((r) => console.log("server is running port 3002"));
});
