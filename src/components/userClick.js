import "../UserClick.css";
import Storage from "./infoStorage";
import uniqid from "uniqid";
export default function UserClick(props) {
  let xPos = props.targetPos[0] - 75 + "px";
  let yPos = props.targetPos[1] - 70 + "px";

  let yPosInvert = props.targetPos[1] - 330 + "px";

  function nameClicked(id) {
    if (Storage[id].isClicked == true) {
      props.foundPokemon(id);
    } else {
      props.wrongPokemon();
    }

    props.disableList();
  }

  let list = [
    <ul key={uniqid()} className="pkmnListCont">
      <li
        key={uniqid()}
        onClick={() => {
          nameClicked(0);
        }}
      >
        {Storage[0].pokemon}
      </li>
      <li
        key={uniqid()}
        onClick={() => {
          nameClicked(1);
        }}
      >
        {Storage[1].pokemon}
      </li>
      <li
        key={uniqid()}
        onClick={() => {
          nameClicked(2);
        }}
      >
        {Storage[2].pokemon}
      </li>
      <li
        key={uniqid()}
        onClick={() => {
          nameClicked(3);
        }}
      >
        {Storage[3].pokemon}
      </li>
      <li
        key={uniqid()}
        onClick={() => {
          nameClicked(4);
        }}
      >
        {Storage[4].pokemon}
      </li>
    </ul>,
  ];

  if (props.clickActive) {
    if (props.targetPos[1] > 610) {
      return (
        <div className="clickedCont" style={{ left: xPos, top: yPosInvert }}>
          {list}
          <div className="targetBox"></div>
        </div>
      );
    } else {
      return (
        <div className="clickedCont" style={{ left: xPos, top: yPos }}>
          <div className="targetBox"></div>
          {list}
        </div>
      );
    }
  } else {
    return;
  }
}
