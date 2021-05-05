let arr = [5, 46, 17, -2, 89, 0, 26];
let a = 24;
let x = 0;
let y;
for (let i = 0; i < arr.length; i++) {
  arr.sort(function (a, b) {
    return a - b;
  });
  if (arr[i] == a) {
    console.log(a);
  } else {
    for (j = 0; j < arr.length; j++) {
      if (a > arr[j] && a < arr[j + 1]) {
        y = j + 1;
      }
    }
  }
}
if (y !== undefined) {
  console.log(y);
}
console.log(arr);
