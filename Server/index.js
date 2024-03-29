//const http = require("http");
//const getCharById = require("./controllers/getCharById");
//* server con express
//const { json } = require("express");
require("dotenv").config();
const express = require("express");
const router = require("./src/routes/index");
const { conn } = require("./src/DB_connection");
const cors = require("cors");

const server = express();
const PORT = process.env.PORT;

//#region
server.use(express.urlencoded({ extended: false }));
server.use(
  express.json({
    type: "*/*",
  })
);

server.use(cors());

//#endregion

//* middleware
server.listen(PORT, () => {
  conn.sync({ force: true });
  console.log(`Server raised in port: ${PORT}`);
});

//* middleware
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//server.use(express.json());
server.use("/rickandmorty", router);

/*

//const character = require("./utils/data");
/*
http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");
    /*
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("gaaaaaaaaaaaa");
    }*/
/*
*eleminidado
    if (url.includes("/rickandmorty/character")) {
      let urlId = url.split("/").pop();
      let found = character.find((character) => character.id === Number(urlId));
      res.writeHead(200, { "content-type": "aplication/json" });
      res.end(JSON.stringify(found));
    }*/
/*
    if (url.includes("/rickandmorty/character")) {
      let urlId = url.split("/").pop();
      getCharById(res, urlId);
    }
  })
  .listen(3001);
*/
