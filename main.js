var expression = ['','',''];
var displaynum1 = Number(expression[0]);
var displayop = expression[1];
var displaynum2 = Number(expression[2]);
var currentop = 0;
 const numclick = document.querySelectorAll("#numbutton");
 numclick.forEach(button => button.addEventListener('click', popDisplay));
 const opclick = document.querySelectorAll("#opbutton");
 opclick.forEach(button => button.addEventListener('click', popOperator));
 const eqclick = document.querySelector("#calcresult");
 eqclick.addEventListener('click',operate);

 function popOperator(e){
    const optodisplay = document.querySelector('#calculator-input-display')
    const opval = e.path[0].value;
    currentop++;
    expression[currentop] += opval;
    let str = expression.join('');
    optodisplay.innerHTML = '<span>'+str+'</span>';
    currentop++;
 }
 function popDisplay(e){
    const numtodisplay = document.querySelector('#calculator-input-display')
    const numval = e.path[0].value;
    expression[currentop] +=numval;
    let str = expression.join('');
    numtodisplay.innerHTML = '<span>'+str+'</span>';
}
function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1/num2;
}

function operate() {
    const expresult = document.querySelector('#calculator-evaluated-display')
    const num1 = Number(expression[0]);
    const num2 = Number(expression[2]);
    const operator = expression[1];
    if (operator == "+") {
      const sum = add(num1,num2);
      expresult.innerHTML = '<span>'+sum+'</span>';
    }
    else if (operator == "-") {
        const sum = subtract(num1,num2);
        expresult.innerHTML = '<span>'+sum+'</span>';
    }
    else if (operator == "*") {
        const sum = multiply(num1,num2);
        expresult.innerHTML = '<span>'+sum+'</span>';
    }
    else if (operator == "/") {
        const sum = divide(num1,num2);
        expresult.innerHTML = '<span>'+sum+'</span>';
    }
}

