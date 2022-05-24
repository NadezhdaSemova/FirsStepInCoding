function repainting(input){
let nylon = Number(input[0]);
let paint = Number(input[1]);
let thinner = Number(input[2]);
let repaierHour = Number(input[3]);

let priceNylon = (nylon + 2) * 1.50;
let pricePaint = paint * 14.50 + ((paint * 14.50) * (10 / 100));
let priceThinner = thinner * 5.00;
let sumForMaterials = priceNylon + pricePaint + priceThinner + 0.4;
let priceRepaier = (sumForMaterials * 0.30) * repaierHour;

let total = sumForMaterials + priceRepaier;

console.log(total);
}
repainting(["5 ",
"10 ",
"10 ",
"1 "]
)