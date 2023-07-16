/** @format */

let arr = [1, 4, 3, 8, 5, 2, 9, 4, 7, 9];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }

console.log("Задание номер 2");
console.log(arr);

function DeterminationRang(arr) {
  let rang = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    let HigherRang = 0;

    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        if (arr[j] < arr[i]) {
          HigherRang++;
        } else if (arr[j] === arr[i]) {
          count++;
        }
      }
    }

    rang[i] = HigherRang + 1 + (count - 1) / 2;
  }

  return rang;
}

let rang = DeterminationRang(arr);

console.log(rang);
