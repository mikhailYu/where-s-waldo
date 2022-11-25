import "../preGame.css";

export default function PreGame(props) {
  let name;
  function handleChange(e) {
    name = e.target.value;
  }
  return (
    <div className="preGameCont">
      <div className="preGameText">
        <p>
          {" "}
          Welcome! There are 5 Pokemon to find, they are listed above. Click on
          a spot on the image and select the Pokemon there.
        </p>
        <p>
          {" "}
          You win after finding all of them! You can then submit your time to
          the leaderboards. Have fun!
        </p>
      </div>
      <div className="preGameNameSubmit">
        <input
          className="nameInput"
          type={"text"}
          minLength={1}
          maxLength={25}
          placeholder={"Name"}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <button
          className="submitName"
          onClick={() => {
            if (!name) {
              name = "Ranger";
            }

            props.setPlayerName(name);
          }}
        >
          Enter Name
        </button>
      </div>
    </div>
  );
}
