import { useEffect, useState } from "react";
import UserClick from "./userClick";
import "../pokemonHitBoxes.css";
import Storage from "./infoStorage";

import ScrollControls from "./scrollControls";

export default function MainPage(props) {
  const [clickActive, SetClickActive] = useState(false);
  const [targetPos, setTargetPos] = useState([0, 0]);

  let scrollElement;
  let scrollSpeed = 300;

  function checkWin() {
    if (checkEvery()) {
      props.winState();
    }
    function checkEvery() {
      return Storage.every((e) => e.isFound === true);
    }
  }

  function scrollDown() {
    scrollElement = document.querySelector(".gameBorder");
    disableList();

    scrollElement.scroll({
      top: scrollElement.scrollTop + scrollSpeed,
      left: scrollElement.scrollLeft,
      behavior: "smooth",
    });
  }

  function scrollUp() {
    scrollElement = document.querySelector(".gameBorder");
    disableList();

    scrollElement.scroll({
      top: scrollElement.scrollTop - scrollSpeed,
      left: scrollElement.scrollLeftrollX,
      behavior: "smooth",
    });
  }

  function scrollLeft() {
    scrollElement = document.querySelector(".gameBorder");
    disableList();

    scrollElement.scroll({
      top: scrollElement.scrollTop,
      left: scrollElement.scrollLeft - scrollSpeed,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    scrollElement = document.querySelector(".gameBorder");
    disableList();

    scrollElement.scroll({
      top: scrollElement.scrollTop,
      left: scrollElement.scrollLeft + scrollSpeed,
      behavior: "smooth",
    });
  }

  function handleClick(e) {
    SetClickActive(!clickActive);

    setTargetPos([e.clientX, e.clientY]);
  }

  function disableList() {
    SetClickActive(false);
    resetIsClicked();
  }

  function handleClickHitbox(id, e) {
    handleClick(e);

    Storage[id].isClicked = true;
  }

  function resetIsClicked() {
    Storage.forEach((element) => {
      element.isClicked = false;
    });
  }

  function foundPokemon(id) {
    if (Storage[id].isFound == true) {
      // say this pokemon has already been found

      resetIsClicked();
    } else {
      Storage[id].isFound = true;

      checkWin();
      props.updateAmountFound();
      // add to win condition
    }
  }

  function wrongPokemon() {
    // say wrong pokemon

    resetIsClicked();
  }

  return (
    <div className="mainPageCont">
      <ScrollControls
        scrollDown={scrollDown}
        scrollUp={scrollUp}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />

      <div
        className="gameBorder"
        onWheel={() => {
          disableList();
        }}
      >
        <UserClick
          clickActive={clickActive}
          targetPos={targetPos}
          foundPokemon={foundPokemon}
          wrongPokemon={wrongPokemon}
          disableList={disableList}
        />
        <div className="imgCont">
          <div
            className="hitBox jirachi"
            onClick={(e) => {
              handleClickHitbox(0, e);
            }}
          ></div>
          <div
            className="hitBox emolga"
            onClick={(e) => {
              handleClickHitbox(1, e);
            }}
          ></div>
          <div
            className="hitBox emboar"
            onClick={(e) => {
              handleClickHitbox(3, e);
            }}
          ></div>
          <div
            className="hitBox ninetales"
            onClick={(e) => {
              handleClickHitbox(2, e);
            }}
          ></div>
          <div
            className="hitBox chimecho"
            onClick={(e) => {
              handleClickHitbox(4, e);
            }}
          ></div>
          <img
            className="gameImg"
            src={require("../images/baseImg.webp")}
            onClick={handleClick}
          ></img>
        </div>
      </div>
    </div>
  );
}
