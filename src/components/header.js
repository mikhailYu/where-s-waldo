import Timer from "./timer";
import "../header.css";
import HeaderPokemon from "./headerPokemon";
import Storage from "./infoStorage";
import uniqid from "uniqid";

export default function Header(props) {
  let pokemonArr = [
    Storage.map((element) => {
      return <HeaderPokemon id={element.id} key={uniqid()} />;
    }),
  ];
  return (
    <div className="headerCont">
      <div className="pkmnToFindCont">{pokemonArr}</div>
      <div className="timerCont">
        <Timer
          gameState={props.gameState}
          getWinTime={props.getWinTime}
          reset={props.reset}
        />
      </div>
    </div>
  );
}
