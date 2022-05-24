function projectsCreation(input){
let name = String(input[0]);
let projectsNumber = Number(input[1]);
let neededHour = projectsNumber * 3;
console.log(`The architect ${name} will need ${neededHour} hours to complete ${projectsNumber} project/s.`);
}
projectsCreation(["George ", "4 "])