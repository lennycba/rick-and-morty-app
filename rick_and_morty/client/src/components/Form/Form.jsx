import style from "./Form.module.css";
import React from "react";
import Validation from "./Validation";
import { Link } from "react-router-dom";
import ROUTES from "../../helpers/routes.helpers";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(Validation({ ...userData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={style.contenedor}>
      <div className={style.formulario}>
        <form onSubmit={handleSubmit}>
          <div className={style.campos}>
            <label htmlFor="">Email: </label>
            <input
              name="email"
              type="text"
              placeholder="ingrese su nombre de usuario"
              value={userData.email}
              onChange={handleInputChange}
              className={errors.email && style.warning}
            />
            {errors.email ? (
              <p className={style.danger}>{errors.email}</p>
            ) : null}

            <label htmlFor="">Password: </label>
            <input
              name="password"
              type="password"
              placeholder="ingrese su password"
              value={userData.password}
              onChange={handleInputChange}
              className={errors.password && style.warning}
            />
            {errors.password ? (
              <p className={style.danger}>{errors.password}</p>
            ) : null}
          </div>
          <button className={style.boton}>LOGIN</button>
          <p>no estas registrado?<Link to={ROUTES.REGISTER}>registrate aquí</Link></p>
        </form>
      </div>
    </div>
  );
}
