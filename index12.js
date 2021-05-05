const log = console.log;
let a = "If at _ you donʼt _, try, try _.";
let b = a.toString().split("");
let arr = ["first", "succeed", "again"];
let x = 0;
log(b);

for (let i = 0; i < b.length; i++) {
  if (b[i] === "_") {
    b[i] = arr[x];
    x++;
  }
}
let c = b.join(" ");
log(c);
