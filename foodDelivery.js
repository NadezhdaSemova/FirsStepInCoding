function foodDelivery(input){
let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let vegetarianMenu = Number(input[2]);

let priceChicken = chickenMenu * 10.35;
let priceFish = fishMenu * 12.40;
let priceVegetarian = vegetarianMenu * 8.15;

let sum = priceChicken + priceFish + priceVegetarian;
let dessert = sum * 0.20;
let total = sum + dessert + 2.50;

console.log(total);

}
foodDelivery(["9 ",
"2 ",
"6 "]
)