import { NavLink } from "react-router-dom";
import { useState } from "react";
import { validacion } from "../../helpers/validaciones";
import style from "./forms.module.css";
import emailImage from "../../assets/email-svgrepo-com.svg";
import lock from "../../assets/lock.svg";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    alias: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
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
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  // desabilitar el voton submit si hay errores
  const diseableHandle = () => {
    let disabled;
    for (let error in errors) {
      if (errors[error] === "") {
        disabled = false;
      } else {
        disabled = true;
        break;
      }
    }
  };
  return (
    <section>
      <div className={style.contenedor}>
        <div>
          <form className={style.formulario} onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <div className={style.input_contenedor}>
              <i>
                <img className={style.icono} src={emailImage} alt="email" />
              </i>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            {errors.email && <samp>{errors.email}</samp>}
            <div className={style.input_contenedor}>
              <i>
                <img className={style.icono} src={lock} alt="lock" />
              </i>
              <input
                type="text"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
            <div className={style.error}>
              {errors.password && <span>{errors.password}</span>}
            </div>

            <div className={style.olvidar}>
              <label>
                <input type="checkbox" /> Reconrdar
                <a href="#"> Olvidé la contraseña</a>
              </label>
            </div>
            <button className={style.boton} type="submit">
              log in
            </button>
          </form>
          <div>
            <div className={style.registrar}>
              <p>
                No tengo Cuenta
                <NavLink to="/newUser">sing up</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Form;
