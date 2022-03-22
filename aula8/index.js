const nome = 'Iago';
const sobreNome = 'Balbino';
const peso = 110;
const alturaEmM = 1.90;
let calculoIMC; //peso / (altura * altura)
let anoNascimento = 1996;
let idade = 2022 - anoNascimento;
calculoIMC = peso / (alturaEmM * alturaEmM);

console.log(`${nome} ${sobreNome} pesa ${peso} KG e tem ${alturaEmM} de altura e seu IMC é de ${calculoIMC}`); 
console.log(`${nome} ${sobreNome} tem ${idade} anos`);