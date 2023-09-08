import { useState } from "react";
import { validacion } from "../../helpers/validaciones";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && <samp>{errors.email}</samp>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button disabled={diseableHandle()} type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
