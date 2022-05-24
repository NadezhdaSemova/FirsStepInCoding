function suppliesForSchool(input){
let packagePen = Number(input[0]);
let packageMarkers = Number(input[1]);
let packageCleaningDetergent = Number(input[2]);
let discount = Number(input[3]);

let pricePens = packagePen * 5.80;
let priceMarkers = packageMarkers * 7.20;
let priceCleraringDetergent = packageCleaningDetergent * 1.20;

let sum = pricePens + priceMarkers + priceCleraringDetergent;
let total = sum - (sum * (discount / 100));

console.log(total);
}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)