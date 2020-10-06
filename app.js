//Start

//fetch objects from HTML
let formula = document.getElementById("formula");
let answer = document.getElementById("ans");

//Global Variables
let clickOperator = 0; 
let percent = false;
let numPercent = 0;
    // this chunk of code is contributed by tushartiwari7
document.onkeyup = function(e) {
    if (e.which == 48 || e.keyCode == 96) {
        putNumber(0);
    } else if (e.which == 49 || e.keyCode == 97) {
        putNumber(1);
    } else if (e.which == 50 || e.keyCode == 98) {
        putNumber(2);
    } else if (e.which == 51 || e.keyCode == 99) {
        putNumber(3);
    } else if (e.which == 52 || e.keyCode == 100) {
        putNumber(4);
    } else if (e.which == 53 || e.keyCode == 101) {
        putNumber(5);
    } else if (e.which == 54 || e.keyCode == 102) {
        putNumber(6);
    } else if (e.which == 55 || e.keyCode == 103) {
        putNumber(7);
    } else if (e.which == 56 || e.keyCode == 104) {
        putNumber(8);
    } else if (e.which == 57 || e.keyCode == 105) {
        putNumber(9);
    } else if (e.keyCode == 190 || e.keyCode == 110) {
        putNumber('.');
    } else if (e.keyCode == 13) {
        document.getElementById("eq").click();
    } else if (e.keyCode == 8) {
        remOne();
    } else if (e.keyCode == 187 || e.keyCode == 107) {  // add
        putOperator('+');
    } else if (e.keyCode == 189 || e.keyCode == 109) {  // subtract
        putOperator('-');
    } else if (e.keyCode == 191 || e.keyCode == 111) {  // divide
        putOperator('/');
    } else if (e.keyCode == 56 || e.keyCode == 106) {  // multiply
        putOperator('*');
    } else if (e.keyCode == 46) {  // add
        document.getElementById("deleteAll").click();
    } else if (e.key === '%') {  // modulo
        putOperator('%');
    }
};
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

//End