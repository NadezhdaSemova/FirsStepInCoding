function depositCalculator (input){
let deposit = Number(input[0]);
let term = Number(input[1]);
let annualInterestRate = Number(input[2]);

let termanual = deposit * (annualInterestRate / 100);
let termForOneMonth = termanual / 12;
let sum = deposit + term * termForOneMonth;

console.log(sum);
}
depositCalculator(["2350",
"6 ",
"7 "]
)