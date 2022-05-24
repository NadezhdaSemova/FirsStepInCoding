function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
let persent = Number(input[3]);

let totalValue = length * width * high;
let inLiters = totalValue * 0.001;
let useSpace = persent / 100;
let neededLiters = inLiters * (1 - useSpace);

console.log(neededLiters);

}
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)