const { User } = require("../DB_connection");
const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password){
       throw Error('Faltan datos')
    } //return res.status(400).send("Faltan datos");

    const response = await User.findOrCreate({ where: { email, password } });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
