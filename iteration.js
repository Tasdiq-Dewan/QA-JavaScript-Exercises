//ex 1
for(let i=100; i<=200; i++){
    console.log(i);
}


//x 2
for(let i=100; i<=200; i++){
    if(i%2==0){
        console.log("-");
    }
    else{
        console.log("*");
    }
}

//ex3
for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log(i);
    }
}


//ex 5
const date = new Date();
let day = date.getDay();
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1: 
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");
        break;
}