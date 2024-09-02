document.addEventListener("DOMContentLoaded",function(event){
    const button=document.getElementById("submit-button");
    let result;
    button.addEventListener("click",function(event){
        event.preventDefault();
        getResult();
    })
    function getResult(){
        const inputValue=parseInt(document.getElementById("number-input").value);
        result=recursiveSum(inputValue);
        document.getElementById("result").innerHTML="Answer: "+result;
    }
    function recursiveSum(inputValue){
        if(inputValue==0){
            return 0;
        }
        else{
            return (inputValue + recursiveSum (inputValue-1));
        }
    }
});