import { startDb } from "./db";
import server from "./server";

// console.log(require("crypto").randomBytes(256).toString("base64"));
const port = 8000;

startDb().then(() => {
  server.listen(port, () => {
    console.log(`Auth server listening on port ${port}`)
  });
});
