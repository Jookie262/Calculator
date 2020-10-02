//Start

//fetch objects from HTML
let formula = document.getElementById("formula");
let answer = document.getElementById("ans");

//Global Variables
let clickOperator = 0; 
let percent = false;
let numPercent = 0;
let colors = ['#EF2D4F', 'pink', 'blue', 'skyblue'];
let currentColor = 0;

function putNumber(num){
    if(!percent){
        clickOperator = 0;
        formula.value += num;
    }
}

function putOperator(opt){
    let forLen = formula.value.length;
    clickOperator++;

    if(forLen == 0 && opt == '-'){
        formula.value += '-';
    }else if(forLen != 0){
        if(!(clickOperator >= 2)){
            clickOperator = 1;
                if(opt == '%'){
                    numPercent = formula.value;
                    percent = true;
                }
            return formula.value += opt;
        }
    }
}

function getPercentage(num){
    return num / 100;
}

function remAll(){
    percent = false;
    formula.value = "";
    answer.value = 0;
}

function remOne(){
    clickOperator = 0;
    let form = formula.value.split('');
    let rem = form.pop();
    if(rem == '%'){ percent = false };
    formula.value = form.join('');
}

function equals(){
    try{
        percent == true ? answer.value = getPercentage(numPercent) : answer.value = eval(formula.value);
    }catch{
        ans.value = 'Syntax Error';
    }
}

function changeColor(){
    if(currentColor < colors.length-1) {
        currentColor = currentColor+1;
        document.body.style.backgroundColor =  colors[currentColor];
    } else {
        currentColor = 0;
        document.body.style.backgroundColor =  colors[0];
    }
}
    

//End