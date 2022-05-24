function vacationBooksList(input){
let numberPages = Number(input[0]);
let pagesForHour = Number(input[1]);
let days = Number(input[2]);

let totalTimeforRead = numberPages / pagesForHour;
let neededHourForDay = totalTimeforRead / days;

console.log(neededHourForDay);
}
vacationBooksList(["432 ",
"15 ",
"4 "]
)