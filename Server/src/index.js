const http = require("http");
const character = require("./utils/data");

http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");
    /*
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("gaaaaaaaaaaaa");
    }*/

    if (url.includes("/rickandmorty/character")) {
      let urlId = url.split("/").pop();
      let found = character.find((character) => character.id === Number(urlId));
      res.writeHead(200, { "content-type": "aplication/json" });
      res.end(JSON.stringify(found));
    }
  })
  .listen(3001);
