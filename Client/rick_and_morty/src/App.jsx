import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./Views/About";
import Detail from "./Views/detail/Detail";
import ErrorPage from "./Views/ErrorPage";
import Form from "./Views/forms/Form";
import Favorites from "./Views/favorites/Favorites";
import "./App.css";
//const url = "https://rickandmortyapi.com/api/character";
const url = "http://localhost:3001/rickandmorty/character";
const EMAIL = "jhoshmc201@gmail.com";
const PASSWORD = "niidea1";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(true);

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onclose = (i) => {
    setCharacters(characters.filter(({ id }) => id !== Number(i)));
  };

  const onSearch = (id) => {
    let repetida = false;
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].id === Number(id)) {
        repetida = true;
        break;
      }
    }
    //setCharacters([...characters, example]);
    if (repetida === false) {
      axios(`${url}/${id}`).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
    } else {
      window.alert("card ya ingresada");
    }
  };
  const random = () => {
    const min = 1;
    const max = 826;
    let r = Math.floor(Math.random() * (max - min - 1) + min);
    // window.alert(r);
    onSearch(r);
  };
  const logOut = () => {
    setAccess(false);
    setCharacters([]);
  };
  return (
    <div>
      {pathname !== "/" && (
        <Nav onSearch={onSearch} random={random} logOut={logOut} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onclose={onclose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
