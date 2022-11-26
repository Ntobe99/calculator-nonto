let numRandom = '';

const handleClick = (digit) => {
    digit = digit.toString();
    numRandom += digit;
    updateDisplay();
}

const getBackspace = () => {
    numRandom = numRandom.slice(0, numRandom.length - 1);
    updateDisplay();
}

const allClear = () => {
    numRandom = ''
    updateDisplay();
}

const updateDisplay = () => {
    document.getElementById('output').innerHTML = numRandom;
}

const equalEval = () => {
    if(numRandom == '' || numRandom== undefined || numRandom.length == 1){
        return 
    }
    operatorArr = ['+','-','x','/'];
    let numArr = [];
    let opArr = [];
    let val = '';
    for (let x of numRandom){
        if(operatorArr.includes(x)){
            numArr.push(parseFloat(val));
            opArr.push(x);
            val = '';
        }
        else{
            val+=x;
        }
    }

    if(val != ''){
        numArr.push(parseFloat(val));
    }

    var result = numArr.shift();
    for(let i= 0; i < numArr.length; i++){
        let operator = opArr[i];
        let b = numArr[i];
        if(operator == '+'){
            result = add(result,b)
        }
        if(operator == '-'){
            result = subtract(result,b)
        }
        if(operator == 'x'){
            result = multiply(result,b)
        }
        if(operator == '/'){
            result = divide(result,b)
        }
    }

    numRandom = result.toString();
    updateDisplay();
    
}

const add = (a,b) => {
    const result = a + b;
    return result;
}

const subtract = (a,b) => {
    const result = a - b;
    return result;
}

const multiply = (a,b) => {
    const result = a*b;
    return result;
}

const divide = (a,b) => {
    const result = a/b;
    return result;
}

