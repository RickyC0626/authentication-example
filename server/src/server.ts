import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./routes/auth";

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(
  morgan(":method :url :status :res[content-length] - :response-time ms", {
    skip: (req, res) => process.env.NODE_ENV === "test",
  })
);

server.get("/health", (req: express.Request, res: express.Response) => {
  res.status(200).send("Healthy!");
});

server.use("/api/auth", authRouter);

export default server;
