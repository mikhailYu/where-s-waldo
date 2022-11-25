import uniqid from "uniqid";

export default function ScoreLi(props) {
  return (
    <li className="scoreLi">
      <p className="scoreNumber">{props.number}.</p>
      <p className="scoreName">{props.name}</p>
      <p className="scoreScore">{props.score}</p>
    </li>
  );
}
