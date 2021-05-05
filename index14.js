let arr = [1, "10", "hi", 2, 3, 5, 6, "bo", "to"];
let str = [];
let num = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === String(arr[i])) {
    str.push(arr[i]);
  } else if (arr[i] === Number(arr[i])) {
    num.push(arr[i]);
  }
}
console.log("String " + str.length);
console.log("Numbers " + num.length);
