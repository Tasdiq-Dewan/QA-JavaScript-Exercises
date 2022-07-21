//ex 1
let strictA = true;
let strictB = 1;
console.log(strictA == strictB); //true
console.log(strictA === strictB);//false

//ex 2
console.log(strictA != strictB); //false
console.log(strictA !== strictB); //true


//ex 3
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

//ex 4
console.log(age > 50 ? "over 50" : "under 50");