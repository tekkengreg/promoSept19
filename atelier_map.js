const items = [{ name: "toto" }, { name: "tata" }, { name: "tata" }];

const output = items.map(item => {
  return { name: item.name, genre: "trans" };
});

console.log(output);

const output2 = items.filter(item => {
  return item.name === "tata";
});
console.log(output2);

const output3 = items.find(item => {
  return item.name === "tata";
});
console.log(output3);
