const fibonacci = function(num) {
    if (num === 0){
        return 0;
    }
    else if(num === 1){
        return 1;
    } else if(num<0){
        return "OOPS";
    }
    
    let fib = new Array(num+2)
    fib[0]=0;
    fib[1]=1;
    for(let i=2;i<=num;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
