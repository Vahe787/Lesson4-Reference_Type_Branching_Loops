let arr = ["anymore", "raven", "me", "comSWAETARYSDYSRmunicate"];
let x = 0;
let y = Infinity;
let max;
let min;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > x) {
    max = arr[i].length;
    x = arr[i].length;
    max = arr[i];
  } else if (y > arr[i].length) {
    min = arr[i].length;
    y = arr[i].length;
    min = arr[i];
  }
}
let result = min.length + max.length;
console.log(result);
