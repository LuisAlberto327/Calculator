const display = document.querySelector(".display");
const ac = document.querySelector("#ac");
const backspace = document.querySelector("#backspace");
const sign = document.querySelector("#sign");
const division = document.querySelector("#division");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const multiplication = document.querySelector("#multiplication");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const sum = document.querySelector("#sum");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const substraction = document.querySelector("#substraction");
const zero = document.querySelector("#zero");
const point = document.querySelector("#point");
const equal = document.querySelector("#equal");
let firstNumber = false;
let secondNumber = false;
let switchOne = false; // becomes true when a result of an operation is on display
let switchSymbol = false; //becomes true to prevent writing more than 1 "+/-" symbol
let switchPoint = false; // becomes true to prevent writing more than 1 point
// setTimeOut property simulates display flashing whenever you press a button
display.textContent = "0";


function operate(a,b){
  a = Number(a);
  b = Number(b);
  if(operator=="sum"){
    return Math.round((a+b)*100)/100;
  }
  else if(operator=="substraction"){
    return Math.round((a-b)*100)/100;
  }
  else if(operator=="multiplication"){
    return Math.round((a*b)*100)/100;
  }
  else if(operator=="division"){
    return Math.round((a/b)*100)/100;
  }
}

ac.addEventListener("click",(e)=>{
  display.textContent = "0";
  firstNumber = false;
  secondNumber = false;
  switchOne = false;
  switchPoint = false;
});

backspace.addEventListener("click",(e)=>{
  if(switchOne==false
    &&display.textContent!="too big :)"
    &&display.textContent!="ERROR"){
    if(display.textContent.length>1){
    display.textContent = display.textContent.slice(
      0,(display.textContent.length-1));
    }
    else {
       display.textContent = "0";
    }
  }
});

sign.addEventListener("click",(e)=>{
//this button turns the value on the screen into a negative or positive  
  if(switchSymbol==false){
    if(switchOne==false){
      if(display.textContent=="0"||
        display.textContent=="too big :)"||
        display.textContent=="ERROR"){
        display.textContent = "-" + display.textContent;
      }
      else if(display.textContent!="0"
        &&display.textContent.length<8
        &&display.textContent!="too big :)"
        &&display.textContent!="ERROR"){
        display.textContent = "-" + display.textContent;
      }
    }
    else if(switchOne==true){
      switchOne = false;
    }
   switchSymbol = true;
  }
  else{
    let removeSymbol = (Number(display.textContent)*(-1));
    display.textContent = removeSymbol;
  }
});

division.addEventListener("click",(e)=>{
  if(firstNumber||firstNumber===0){
    secondNumber = display.textContent;
    firstNumber = operate(firstNumber,secondNumber);
    if(firstNumber.toString().length<8){
      display.textContent = firstNumber;//no need toString() conversion
      secondNumber = false;
      switchOne = true;
    }
    else{
      firstNumber = false;
      secondNumber = false;
      display.textContent="too big :)";
    }
  }
  else{
    firstNumber = display.textContent;
    display.textContent = "0";
  }
  operator = "division";
  switchPoint = false;
});

one.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "1";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "1";
    } 
  }
  else if(switchOne==true){  
    display.textContent = "1";
    switchOne = false;      
  }
});

two.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "2";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "2";
    } 
  }
  else if(switchOne==true){  
    display.textContent = "2";
    switchOne = false;      
  }
});

three.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "3";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "3";
    } 
  }
  else if(switchOne==true){  
    display.textContent = "3";
    switchOne = false;      
  }
});

multiplication.addEventListener("click",(e)=>{
  if(firstNumber||firstNumber===0){
    secondNumber = display.textContent;
    firstNumber = operate(firstNumber,secondNumber);
    if(firstNumber.toString().length<8){
      display.textContent = firstNumber;//no need toString() conversion
      secondNumber = false;
      switchOne = true;
    }
    else{
      firstNumber = false;
       secondNumber = false;
      display.textContent="too big :)";
    }
  }
  else{
    firstNumber = display.textContent;
    display.textContent = "0";
  }
  operator = "multiplication";
  switchPoint = false;
});

four.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "4";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "4";
    } 
  }
  else if(switchOne==true){  
    display.textContent = "4";
    switchOne = false;      
  }
});

five.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "5";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "5";
    } 
  }
  else if(switchOne==true){  
    display.textContent = "5";
    switchOne = false;      
  }
});

six.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "6";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "6";
    } 
  }
  else if(switchOne==true){  
    display.textContent = "6";
    switchOne = false;      
  }
});

sum.addEventListener("click",(e)=>{
  if(firstNumber||firstNumber===0){
    secondNumber = display.textContent;
    firstNumber = operate(firstNumber,secondNumber);
    if(firstNumber.toString().length<8){
      display.textContent = firstNumber;//no need toString() conversion
      secondNumber = false;
      switchOne = true;
    }
    else{
      firstNumber = false;
       secondNumber = false;
      display.textContent="too big :)";
    }
  }
  else{
    firstNumber = display.textContent;
    display.textContent = "0";
  }
  operator = "sum";
  switchPoint = false;
});

seven.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "7";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "7";
    } 
  }
  else if(switchOne==true){  
    display.textContent = "7";
    switchOne = false;      
  }
});

eight.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "8";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "8";
    } 
  }
  else if(switchOne==true){  
    display.textContent = "8";
    switchOne = false;      
  }
});

nine.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "9";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "9";
    } 
  }
  else if(switchOne==true){  
    display.textContent = "9";
    switchOne = false;      
  }
});

substraction.addEventListener("click",(e)=>{
  if(firstNumber||firstNumber===0){
    secondNumber = display.textContent;
    firstNumber = operate(firstNumber,secondNumber);
    if(firstNumber.toString().length<8){
      display.textContent = firstNumber;//no need toString() conversion
      secondNumber = false;
      switchOne = true;
    }
    else{
      firstNumber = false;
      secondNumber = false;
      display.textContent="too big :)";
    }
  }
  else{
    firstNumber = display.textContent;
    display.textContent = "0";
  }
  operator = "substraction";
  switchPoint = false;
});

zero.addEventListener("click",(e)=>{
  if(switchOne==false){
    if(display.textContent=="0"||
      display.textContent=="too big :)"||
      display.textContent=="ERROR"){
      display.textContent = "0";      
    }
    else if(display.textContent!="0"
      &&display.textContent.length<8
      &&display.textContent!="too big :)"
      &&display.textContent!="ERROR"){
      display.textContent = display.textContent + "0";
    } 
  }
  else if(switchOne==true){  
      display.textContent = "0";
      switchOne = false;      
  }
});

point.addEventListener("click",(e)=>{
  if(switchPoint==false){
    if(switchOne==false){
      if(display.textContent=="0"||
        display.textContent=="too big :)"||
        display.textContent=="ERROR"){
        display.textContent = ".";      
      }
      else if(display.textContent!="0"
        &&display.textContent.length<8
        &&display.textContent!="too big :)"
        &&display.textContent!="ERROR"){
        display.textContent = display.textContent + ".";
      } 
    }
    else if(switchOne==true){  
      display.textContent = ".";
      switchOne = false;
    }
  }
  switchPoint = true; 
});

equal.addEventListener("click",(e)=>{
  if(firstNumber||firstNumber===0){
    secondNumber = display.textContent;
    firstNumber = operate(firstNumber,secondNumber);
    if(firstNumber.toString().length<8){
      display.textContent = firstNumber;//no need toString() conversion
      firstNumber = false;
      secondNumber = false;
      switchOne = true;
    }
    else{
      firstNumber = false;
      secondNumber = false;
      display.textContent="too big :)";
    }  
      
  }
  else{
    display.textContent = "ERROR";
    firstNumber = false;
    secondNumber = false;
  }
  switchPoint = false;
});