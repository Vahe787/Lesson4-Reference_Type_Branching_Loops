let arr = [4, 3, 5, 6, 8, 9];
let isExist = "No";
const num1 = 5;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num1) {
    isExist = "Yes";
  }
}
console.log(isExist);
