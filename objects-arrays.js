
//ex 1
let darthVader = {
    allegiance: "Empire", 
    weapon: "lightsabre", 
    sith: true
};
console.log(darthVader);

//ex 2
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith? false : true}`);


//ex3
let myArray = ["hello", "everyone."];
console.log(myArray.length);
myArray.push("third");
myArray.push("fourth");
myArray.push("fifth");
console.log(myArray.length);
myArray.shift();
for(let e of myArray){
    console.log(e);
}