const add = function(number1, number2) {
	let result = number1 + number2;
  return result;
};

const subtract = function(number1, number2) {
	let result = number1 - number2;
  return result;
};

const sum = function(numArr) {
	let result = numArr.forEach(element => {
    sum+=element;
  });
};

const multiply = function(numArr) {
  let result=1;
  for(let i =0; i<numArr.length; i++){
    result *= numArr[i];
  }
};

const power = function(number, exponent) {
	let result=number;
  if(exponent=0){
    result==1;
  }
  else{
    for (let i=0; i<exponent; i++){
      result*=number;
    }
  }  
  return result;
};

const factorial = function(factor) {
  let result=1;
  if(factor==0 || factor==1){
    result = 1;
  }
  else{
    for(let i=1; i<=factor; i++){
      result *= i;  
    }
  }	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
