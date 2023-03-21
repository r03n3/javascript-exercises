const findTheOldest = function(perArr) {
    let oldest = perArr.reduce(function(prev, curr) {
        const prevAge = calcAge(prev.yearOfBirth, prev.yearOfDeath);
        const currAge = calcAge(curr.yearOfBirth, curr.yearOfDeath);
        return prevAge > currAge ? prev : curr;
    });

    return oldest;
};

const calcAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death-birth;
}


// Do not edit below this line
module.exports = findTheOldest;
