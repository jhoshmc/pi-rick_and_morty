const { Router } = require("express");

const getCharById = require("../controllers/getCharById");

const postUser = require("../controllers/postUser");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

const router = Router();

router.get("/character/:id", getCharById);
router.post("/create", postUser);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
