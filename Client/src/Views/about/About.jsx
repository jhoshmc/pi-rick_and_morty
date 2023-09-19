import image from "../../assets/rene.jpeg";
import style from "./about.module.css";
import linkedin from "../../assets/linkedin-icon.svg";
import gitHub from "../../assets/gitHub-icon.svg";
const About = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.description}>
        <div>
          <h2>Hola soy josh</h2>

          <img className={style.portada} src={image} alt="josh" />
          <div>
            <spam>
              soy un estudiante full Stack de henrry. Puedes encontrar mis
              trabajos en estos canales:
            </spam>
            <div className={style.iconos}>
              <a
                href="https://www.linkedin.com/in/josias-moran-37b320275/"
                target="_blank"
              >
                <img className={style.icono} src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/jhoshmc" target="_blank">
                <img className={style.icono} src={gitHub} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
