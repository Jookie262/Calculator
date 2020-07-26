//fetch objects from HTML
let formula = document.getElementById("formula");
let answer = document.getElementById("ans");
let equal = document.querySelector('eq');
let click = 0; 

function putNumber(num){
    let isOperator = (num == '*' || num == "+" || num == "/" || num == '-');
    if(isOperator){
        click++;
        if(!(click >= 2 && isOperator)){
            click = 1;
            return formula.value += num;
        }
    }else {
        click = 0;
        return formula.value += num;
    }
}

function remAll(){
    formula.value = "";
    answer.value = 0;
}

function remOne(){
    let num = formula.value;
    let arr = num.split('');
    let a = arr.pop();
    if(a == '*' || a == '+' || a == '-' || a == '/'){
        click = 0;
    }
    formula.value = arr.join('');
}

function answerEQ(){
   // let getOperator = formula.value.match(/\W/ig);    
    let ans = eval(formula.value);
    return answer.value = ans;
}