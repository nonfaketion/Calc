var firstnum= "";
var currnum="";
var operation = "";
const expresult = document.querySelector('#calculator-evaluated-display');
const optodisplay = document.querySelector('#calculator-input-display')
const numclick = document.querySelectorAll("#numbutton");
numclick.forEach(button => button.addEventListener('click', popDisplay));
const opclick = document.querySelectorAll("#opbutton");
opclick.forEach(button => button.addEventListener('click', popOperator));
const eqclick = document.querySelector("#calcresult");
eqclick.addEventListener('click',operate);

 function popOperator(e){
    const opval = e.path[0].value;
    operation = opval;
    firstnum = currnum;
    currnum = "";
    expresult.innerHTML = '<span>'+firstnum+operation+'</span>';
    optodisplay.innerHTML = '<span>'+currnum+'</span>';
 }
 function popDisplay(e){
    const numval = e.path[0].value;
    currnum += numval;
    optodisplay.innerHTML = '<span>'+currnum+'</span>';
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
    const num1 = Number(firstnum);
    const num2 = Number(currnum);
    
    if (operation == "+") {
      const sum = add(num1,num2);
      currnum = sum;
      optodisplay.innerHTML = '<span>'+sum+'</span>';
      expresult.innerText = "";
    }
    else if (operation == "-") {
        const sum = subtract(num1,num2);
        currnum = sum;
        optodisplay.innerHTML = '<span>'+sum+'</span>';
        expresult.innerText = "";
    }
    else if (operation == "*") {
        const sum = multiply(num1,num2);
        currnum = sum;
        optodisplay.innerHTML = '<span>'+sum+'</span>';
        expresult.innerText = "";
    }
    else if (operation == "/") {
        const sum = divide(num1,num2);
        currnum = sum;
        optodisplay.innerHTML = '<span>'+sum+'</span>';
        expresult.innerText = "";
    }
}

