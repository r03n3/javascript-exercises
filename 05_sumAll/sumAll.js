const sumAll = function(numberA, numberB) {
 let numberC = 0;
 let numberD = 0;
 let sum = 0;
 if(numberA > numberB){
    numberC = Number(numberB);
    numberD = Number(numberA);
 } else if (numberA<numberB){
    numberC = Number(numberA);
    numberD = Number(numberB);
 }
 else if (numberA <0 || numberB <0  || numberA==numberB){
    return "ERROR";
 }
 else{
    return "ERROR";}
 for(let i=0; i<numberD-numberC;i++){
    if(i=0){
        sum+=numberC;
    }
    else{
        sum+=numberC+i;
    }
 }
 return sum;
 } 
;

// Do not edit below this line
module.exports = sumAll;
