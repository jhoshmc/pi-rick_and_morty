const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character";
//* async await
async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const { data } = await axios(`${url}/${id}`);
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      type: data.type,
      origin: data.origin,
      image: data.image,
      status: data.status,
      location: data.location,
    };
    character.name
      ? res.status(200).json(character)
      : res.status(400).send("not fount");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//* promesas
/*
const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`${url}/${id}`)
    .then(({ data }) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        type: data.type,
        origin: data.origin,
        image: data.image,
        status: data.status,
        location: data.location,
      };
      character.name
        ? res.status(200).json(character)
        : res.status(400).send("not fount");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};
*/
/*
const getCharById = (res, id) => {
  axios(`${url}/${id}`)
    .then(({ data }) => {
      obj = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        type: data.type,
        origin: data.origin,
        image: data.image,
        status: data.status,
        location: data.location,
      };

      res.writeHead(200, { "content-type": "aplication/json" });
      res.end(JSON.stringify(obj));
      //console.log(obj);
    })
    .catch((error) => {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end(error.message);
    });
};
*/
module.exports = getCharById;
