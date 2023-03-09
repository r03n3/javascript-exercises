const sumAll = function(numberA, numberB) {
 let numberC = 0;
 let numberD = 0;
 let sum = 0;
 if(!Number.isInteger(numberA) || !Number.isInteger(numberB)) return "ERROR";
 if(numberA > numberB && numberA>=0 && numberB>=0){
    numberC = Number(numberB);
    numberD = Number(numberA);
     } else if (numberA<numberB && numberA>=0 && numberB>=0){
    numberC = Number(numberA);
    numberD = Number(numberB);
     }
     else if (Number(numberA) <0 || Number(numberB) <0  || numberA==numberB){
        return "ERROR";
     }
     else{
        return "ERROR";}
     for(let i=0; i<=numberD-numberC;i++){
        if(i==0){
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
