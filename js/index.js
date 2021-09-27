// Iteration 1: Names and Input
const haker1 = "patito"
console.log(`"the driver´s name is ${haker1}"`);
const haker2 = "martin"
console.log(`"the navigator´s name is ${haker2}"`)
// Iteration 2: Conditionals
if(haker1.length != haker2.length){
    if(haker1.length > haker2.length){
        console.log(`"The driver has the longest name, it has ${haker1.length} characters"`)
    }else{
        console.log(`"It seems that the navigator has the longest name, it has ${haker2.length} characters."`)
    }
}else{
    console.log("Wow, you both have equally long names, "+ haker1.length+ " characters!")
}


// Iteration 3: Loops
//3.1
const hakerUpperCase = haker1.toLocaleUpperCase()
let nameInCapitals =""
for(i=0; i<haker1.length; i++){
    
    nameInCapitals += `${hakerUpperCase[i]} `
}
console.log(nameInCapitals.trimEnd())

console.log(hakerUpperCase.split("").join(" "))
//3.2
let hakerReverse =haker2.split("").reverse().join("")
console.log(hakerReverse)

//3.3
if(haker1.localeCompare(haker2)!= 0){
    if(haker1.localeCompare(haker2) < 0){
        console.log("The driver's name goes first.")
    }else{
        console.log("Yo, the navigator goes first definitely.")
    }
}else{
    console.log("What?! You both have the same name?")
}

