const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password) return res.staus(400).send("Faltan datos");
    const resemail = await User.findOne({ where: { email: email } });
    if (!resemail) return res.status(404).send("Usuario no encontrado");
    const respassword = await User.findOne({ where: { password: password } });
    if (!respassword) return res.status(403).send("Contraseña incorrecta");
    res.json({ acces: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = login;
