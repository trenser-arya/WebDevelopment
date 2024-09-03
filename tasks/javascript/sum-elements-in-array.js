const numberArray = [1, 2, 3, 4, 6];
const result = 9;
sumResult(numberArray, result);
function sumResult(numberArray, result) {
    console.log("Array = "+numberArray);
    for (let i = 0; i < numberArray.length; i++) {
        for (let j = i+1; j < numberArray.length; j++) {
            if (numberArray[i]+numberArray[j]==result) {
                console.log("Answer = ("+numberArray[i] + " " + numberArray[j]+")");
            }
        }
    }
}