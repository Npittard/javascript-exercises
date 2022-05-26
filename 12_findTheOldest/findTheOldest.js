const findTheOldest = function(people) {
    // itterate over objects
    // capture object of person who's difference in birth and death years in variable
    // if difference is higher than current variable replace with new object
    let d = new Date;
    let oldestNum = 0;
    let oldestPerson =''
    for(let i = 0; i< people.length; i++){
        if(people[i].yearOfDeath === undefined){
            d = d.getFullYear()
            let o1 = {name: people[i].name, yearOfBirth: people[i].yearOfBirth, yearOfDeath: d}
            people.push(o1)
        }
        if(people[i].yearOfDeath - people[i].yearOfBirth > oldestNum){
            oldestNum = people[i].yearOfDeath - people[i].yearOfBirth
            oldestPerson
            oldestPerson = people[i]
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
