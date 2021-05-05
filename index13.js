let arr = [8, 0, 1, "hey", 12, 5, false, "245234523", true, "2", null, 7, 3];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (
    arr[i] !== String &&
    arr[i] !== undefined &&
    arr[i] !== null &&
    arr[i] !== true &&
    arr[i] / arr[i] &&
    arr[i] === Number(arr[i])
  ) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);
