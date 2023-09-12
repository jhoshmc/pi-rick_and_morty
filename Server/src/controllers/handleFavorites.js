let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  let filter = myFavorites.filter((character) => character.id !== Number(id));
  myFavorites = filter;
  res.status(200).json(filter);
};

module.exports = {
  postFav,
  deleteFav,
};
