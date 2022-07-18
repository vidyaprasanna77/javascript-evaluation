function pyramid() {
    let str = "";
    let count = 1;
    for(let i = 1; i <=5 ;i++){
        for(let j = 1;j <=5-i;j++){
            str+= " ";
        }
        for(let k = 1 ; k <= i-1;k++){
            str += " " + count;
            count++;
        }
        str += "\n";
    }
    return str;
}
console.log(pyramid());