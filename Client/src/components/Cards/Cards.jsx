import Card from "../card/Card";
import style from "../Cards/cards.module.css";
const Cards = ({ characters, onclose }) => {
  return (
    <div className={style.container}>
      {characters.map((el) => (
        <Card key={el.id} characters={el} onclose={onclose} />
      ))}
    </div>
  );
};
export default Cards;
