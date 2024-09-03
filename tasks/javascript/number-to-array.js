let numbers=123;
const numberArray=[];
while(numbers!=0){
    let remainder=numbers%10;
    numberArray.unshift(remainder);
    numbers=parseInt(numbers/10);
}
console.log(numberArray);