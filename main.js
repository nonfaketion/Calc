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
const dele = document.querySelector("#delbutton");
dele.addEventListener('click',del);
const cbut = document.querySelector("#CButton");
cbut.addEventListener('click',clear);

 function popOperator(e){
    if(optodisplay.innerText === ""){return;}
    const opval = e.path[0].value;
    if(firstnum !=="" && currnum !=="" && operation !==""){
        operate();
        firstnum = optodisplay.innerText;
    }
    else{
    firstnum = currnum;
    }
    operation = opval;
    currnum = "";
    expresult.innerHTML = firstnum+operation;
    optodisplay.innerHTML = currnum;
 }

 function popDisplay(e){
    const numval = e.path[0].value;
    currnum += numval;
    optodisplay.innerHTML = currnum;
}

function clear(){
    optodisplay.innerText="";
    expresult.innerText = "";
    firstnum =  "";
    currnum = "";
    operation = "";
}

function del(){
    optodisplay.innerText = optodisplay.innerText.slice(0, -1);
    currnum = optodisplay.innerText;
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
      optodisplay.innerHTML = sum;
      expresult.innerText = "";
    }
    else if (operation == "-") {
        const sum = subtract(num1,num2);
        currnum = sum;
        optodisplay.innerHTML = sum;
        expresult.innerText = "";
    }
    else if (operation == "*") {
        const sum = multiply(num1,num2);
        currnum = sum;
        optodisplay.innerHTML = sum;
        expresult.innerText = "";
    }
    else if (operation == "/") {
        const sum = divide(num1,num2);
        currnum = sum;
        optodisplay.innerHTML = sum;
        expresult.innerText = "";
    }
}

