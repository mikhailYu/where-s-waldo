export default function SortScores(scoreArr) {
  // sort

  let newArr = [];
  Object.keys(scoreArr[0]).forEach((element) => {
    let thisEl = scoreArr[0][element];
    newArr.push(thisEl);
  });

  let sorted = newArr.slice(0);
  sorted.sort(function (a, b) {
    return a.score - b.score;
  });

  if (sorted.length > 10) {
    sorted = sorted.splice(0, 10);
  }

  return sorted;
}
