function bascketballEquipment(input){
let yearTax = Number(input[0]);

let aces = yearTax - (yearTax * 0.40);
let equipment = aces - (aces * 0.20);
let ball = equipment / 4;
let accessories = ball / 5;

let total = yearTax + aces + equipment + ball + accessories;

console.log(total);
}
bascketballEquipment(["550 "])