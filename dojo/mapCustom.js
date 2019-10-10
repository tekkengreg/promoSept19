// const items = new Array()
const items = [45, 34, 23];
console.log("array", items);
console.log("ref", items.map((item, i) => item * i));

Array.prototype.map = function(cb) {
  console.log("this", this);
  const outArray = [];
  for (let i = 0; i < this.length; i++) {
    outArray[i] = "cb(this[i], i, this)";
  }
  return outArray;
};

console.log("out", items.map((item, i) => item * i));

const filter = function(inputArray, cb) {
  const outArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (cb(inputArray[i])) outArray.push(inputArray[i]);
  }
  return outArray;
};
console.log("outfilter", filter(items, item => item > 30));

const find = function(inputArray, success, error) {
  if (inputArray === undefined) {
    error("array must be defined");
    return;
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (success(inputArray[i])) return inputArray[i];
  }
};
console.log(find(undefined, item => item > 30, e => console.log(e)));
