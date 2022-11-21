import { startDb } from "./db";
import server from "./server";

const port = 8000;

startDb().then(() => {
  server.listen(port, () => {
    console.log(`Auth server listening on port ${port}`)
  });
});
