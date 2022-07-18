const objOne = {
    id:1,
    name:"edison"
}
const objTwo = {
    id:1,
    name:"edison"
}
const objThree = {
    id:1,
    name:"edison"
}
const objFour = {
    id:2,
    name:"edison"
}

if(objOne.id == objTwo.id && objOne.name == objTwo.name){
    console.log("true");
} else {
    console.log("false");
}

if(objThree.id == objFour.id && objThree.name == objFour.name){
    console.log("true");
} else {
    console.log("false");
}