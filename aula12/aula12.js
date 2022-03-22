let varA = 'A';
let varB = 'B';
let varC = 'C';

// varTempA = varA;
// varA = varB;
// varB = varC;
// varC = varTempA;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);