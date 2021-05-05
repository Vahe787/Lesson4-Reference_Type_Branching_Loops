let arr = [2, 456, 24, -12, 256, -222, -456, 0];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j]) {
      let x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
  }
}
console.log(arr);
