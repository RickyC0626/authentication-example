import server from "./server";

const port = 8000;

server.listen(port, () => {
  console.log(`Auth server listening on port ${port}`)
});
