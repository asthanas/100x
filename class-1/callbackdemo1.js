function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of Sum is : " + data);
}

function displayResultPassive(data){
    console.log("Result of Sum is : " + data);
}

const ans = sum(1,2, displayResult);
