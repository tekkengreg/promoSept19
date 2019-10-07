const toCamelCase = phrase => phrase.split(" ").map(word => word.slice(0, 1).toUpperCase()+word.slice(1)).join("");

console.log(toCamelCase("je suis trop fort"));
