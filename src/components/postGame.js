import "../postGame.css";
import GetScores from "./getScores";
import SortScores from "./sortScores";
import ScoreLi from "./scoreLi";
import uniqid from "uniqid";

export default function PostGame(props) {
  function genScore() {
    let info = props.scores;
    let arr = [];
    let number = 0;

    let sortedScores = SortScores(info);

    sortedScores.forEach((element) => {
      number++;
      let thisObj = (
        <ScoreLi
          name={element.playerName}
          score={element.score}
          number={number}
          key={uniqid()}
        />
      );

      arr.push(thisObj);
    });
    return arr;
  }
  return (
    <div className="postGameCont">
      <div className="highScoreCont">
        <p>High Scores:</p>
        <ul className="scoresUl">{genScore()}</ul>
      </div>
      <div className="postGameBtns">
        <button
          className="postGamebtn"
          onClick={() => {
            props.submitScore();
          }}
        >
          Submit
        </button>
        <button
          className="postGamebtn"
          onClick={() => {
            props.retry();
          }}
        >
          Retry
        </button>
      </div>
    </div>
  );
}
