let strictA = true;
let strictB = 1;
console.log(strictA == strictB); //true
console.log(strictA === strictB);//false
console.log(strictA != strictB); //false
console.log(strictA !== strictB); //true

let age = 24;
if(age >= 18 && age <= 65){
    console.log("Between 18 and 65");
}
else if(age <18){
    console.log("Underage");
}
else{
    console.log("Retired");
}

console.log(age > 50 ? "over 50" : "under 50");