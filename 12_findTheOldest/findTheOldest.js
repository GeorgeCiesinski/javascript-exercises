const findTheOldest = function(people) {
    return people.reduce(function(oldestPerson, nextPerson) {
        oldAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        nextAge = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
        return oldAge > nextAge ? oldestPerson : nextPerson;
    });
}

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
