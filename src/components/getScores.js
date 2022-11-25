import { getDatabase, set, ref, onValue } from "firebase/database";

export default function GetScores() {
  const db = getDatabase();

  let returnArr = [];

  const testScore = ref(db, "highScore");
  onValue(testScore, (snapshot) => {
    const data = snapshot.val();

    returnArr.push(data);
  });

  return returnArr;
}
