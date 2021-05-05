let a = 3512345456;

let arr = a.toString().split("");
if (arr[arr.length - 1] == 0) {
  console.log(a);
} else {
  let c = 0;
  c = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = c;
  let b = arr.join("");
  console.log(b);
}
