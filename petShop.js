function petShop(input){
let numberDogsFood = Number(input[0]);
let numberCatFood = Number(input[1]);

let totalFood = (numberDogsFood * 2.5) + (numberCatFood * 4);
console.log(totalFood + ` lv.`)
}
petShop(["13","9"])