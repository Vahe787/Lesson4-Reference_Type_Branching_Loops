let x = 1;
let y = 2;
let z = 1;

if (x > 0 && y > 0 && z > 0) {
  console.log("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y < 0 && z > 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}
