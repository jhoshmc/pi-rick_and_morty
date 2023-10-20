import { NavLink } from "react-router-dom";
import { useState } from "react";
import { validacion } from "../../helpers/validaciones";
import axios from "axios";
import style from "./newUser.module.css";
import email from "../../assets/email-svgrepo-com.svg";
import lock from "../../assets/lock.svg";
const NewUser = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validacion({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );

    console.log(userData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3001/rickandmorty/create", userData);

    // console.log(userData);
  };

  return (
    <>
      <section>
        <div className={style.contenedor}>
          <div className={style.formulario}>
            <form onSubmit={handleSubmit}>
              <h2>Crear Cuenta</h2>
              <div className={style.input_contenedor}>
                <i>
                  <img className={style.icono} src={email} alt="email" />
                </i>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={handleChange}
                />
                <label>Ingrese un email</label>
              </div>
              {errors.email && <samp>{errors.email}</samp>}
              <div className={style.input_contenedor}>
                <i>
                  <img className={style.icono} src={lock} alt="lock" />
                </i>
                <input
                  type="text"
                  name="password"
                  id="passwoed"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Your password"
                />
                <label>Ingrese una contraseña</label>
              </div>
              <div className={style.error}>
                {errors.password && <span>{errors.password}</span>}
              </div>
              <button className={style.boton} type="submit">
                create an Account
              </button>
            </form>
            <div className={style.volver}>
              <p>
                Regresar
                <NavLink to="/"> back</NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewUser;
