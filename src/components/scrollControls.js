import "../ScrollControls.css";

export default function ScrollControls(props) {
  function down() {
    props.scrollDown();
  }
  function up() {
    props.scrollUp();
  }

  function left() {
    props.scrollLeft();
  }

  function right() {
    props.scrollRight();
  }
  return (
    <div className="scrollControls">
      <div className="upScroll" onClick={up}>
        ^
      </div>
      <div className="rightScroll" onClick={right}>
        {">"}
      </div>
      <div className="leftScroll" onClick={left}>
        {"<"}
      </div>
      <div className="downScroll" onClick={down}>
        ^
      </div>
    </div>
  );
}
