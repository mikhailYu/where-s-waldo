import Storage from "./infoStorage";

import uniqid from "uniqid";

export default function HeaderPokemon(props) {
  function getStyleIcon() {
    if (Storage[props.id].isFound == true) {
      return { filter: "saturate(0)" };
    }
  }

  function getStyleName() {
    if (Storage[props.id].isFound == true) {
      return { textDecoration: "line-through", color: "white" };
    }
  }
  return (
    <div className="pkmnToFind" key={uniqid()}>
      <img
        className="pkmnIcon"
        src={Storage[props.id].src}
        style={getStyleIcon()}
        key={uniqid()}
      ></img>
      <p className="pkmnName" style={getStyleName()} key={uniqid()}>
        {Storage[props.id].pokemon}
      </p>
    </div>
  );
}
