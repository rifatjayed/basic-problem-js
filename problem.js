const myArry = [25, -1, 2, -3, 4, 5, 6, -7, 8, -9, 10, 15, 20]

function graterThan5(arry) {
    const largeNumber= []
    for (let i = 0; i < arry.length; i++) {
        const element = arry[i];
        if(element>5){
            largeNumber.push(element);
           
        }
       
    }
    return largeNumber.length
}


const largeThan5 = graterThan5(myArry)
console.log(largeThan5);
