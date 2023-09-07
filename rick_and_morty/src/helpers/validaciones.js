const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const numberRegex = /\d/;
export const validacion = (data) => {
  const errors = {};
  if (!data.email) {
    errors.email = "Ingrese su email";
  }
  if (!validEmail.test(data.email)) {
    errors.email = "Email no valido";
  }
  if (data.email.length > 35) {
    errors.email = "No puede tener mas de 35 caracteres";
  }

  if (!numberRegex.test(data.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.password =
      "La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
  }
  return errors;
};
