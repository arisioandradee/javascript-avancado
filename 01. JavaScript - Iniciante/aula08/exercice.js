let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
const fixoA = varA;

// varA = varB;
// varB = varC
// varC = fixoA;

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);