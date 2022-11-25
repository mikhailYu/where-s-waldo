import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainPage";
import Storage from "./components/infoStorage";
import PreGame from "./components/preGame";
import PostGame from "./components/postGame";
import GetScores from "./components/getScores";
import uniqid from "uniqid";
import { useState } from "react";
import { getDatabase, set, ref, onValue, push } from "firebase/database";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0ITSOD3h65cpz89X_FmpHKngCGKm5h4M",
  authDomain: "pokemonfind-4b692.firebaseapp.com",
  projectId: "pokemonfind-4b692",
  storageBucket: "pokemonfind-4b692.appspot.com",
  messagingSenderId: "536592110411",
  appId: "1:536592110411:web:e27a460d66febc0fbe8ece",
  measurementId: "G-JELXPVWPJB",
};

initializeApp(firebaseConfig);

function App() {
  const gameStateSheet = ["preGame", "inGame", "postGame"];
  const [amountFound, setAmountFound] = useState(0);
  const [gameState, setGameState] = useState(gameStateSheet[0]);
  const [reset, setReset] = useState(false);
  const [name, setName] = useState("Ranger");
  const [scores, setScores] = useState(GetScores());
  const [submitActive, setSubmitActive] = useState(true);

  let winTime = 0;

  function submitScore() {
    const database = getDatabase();
    const scores = ref(database, "highScore");
    const newScores = push(scores);

    if (submitActive == true) {
      set(newScores, {
        playerName: name,
        score: winTime,
      });
      setSubmitActive(false);
      setScores(GetScores());
    } else {
      return;
    }
  }

  function updateAmountFound() {
    setAmountFound(amountFound + 1);
  }

  function setPlayerName(name) {
    setName(name);

    setGameState(gameStateSheet[1]);
  }

  function winState() {
    setGameState(gameStateSheet[2]);
  }

  function getWinTime(time) {
    winTime = time;
  }

  function retry() {
    setReset(true);
    setSubmitActive(true);
    setInterval(() => {
      setReset(false);
    }, 10);
    setAmountFound(0);
    Storage.forEach((element) => {
      element.isClicked = false;
      element.isFound = false;
    });
    setGameState(gameStateSheet[1]);
  }

  function displayPage() {
    if (gameState == gameStateSheet[0]) {
      return <PreGame setPlayerName={setPlayerName} />;
    } else if (gameState == gameStateSheet[1]) {
      return (
        <MainPage updateAmountFound={updateAmountFound} winState={winState} s />
      );
    } else if (gameState == gameStateSheet[2]) {
      return (
        <PostGame retry={retry} submitScore={submitScore} scores={scores} />
      );
    }
  }

  return (
    <div className="App">
      <Header
        amountFound={amountFound}
        gameState={gameState}
        getWinTime={getWinTime}
        reset={reset}
      />
      <div className="bodyCont">{displayPage()}</div>
      <Footer key={uniqid()} />
    </div>
  );
}

export default App;
