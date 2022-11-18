import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const port = 8000;

app.use(cors());
app.use(helmet());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms", {
    skip: (req, res) => process.env.NODE_ENV === "test",
  })
);

app.get("/health", (req: express.Request, res: express.Response) => {
  res.status(200).send("Healthy!");
});

app.listen(port, () => {
  console.log(`Auth server listening on port ${port}`)
});
