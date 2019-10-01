const t1 = [76, 58, 34, 13, 90];
// const t2 = new Array(t1.length);
const t3 = [];
const t4 = new Array(5);
t4.fill(Math.random());
console.log(t4);
// console.log(t1.reverse());

// for (let i = 0; i < t1.length; i++) t2[t2.length - 1 - i] = t1[i];

for (let i = t1.length - 1; i >= 0; i--) t3.push(t1[i]);
console.log(t1);
console.log(t3);
for (let i = 0; i < t1.length; i++) t4[i] = t1[i] + t3[i];

console.log(t4);
