const findTheOldest = function(nameArray) {
    let today = new Date(); // sets today's date for age calcs if someone is alive.
    let deathMap = nameArray.map(x => x.yearOfDeath); // array of death years
    let birthMap = nameArray.map(x => x.yearOfBirth); // array of birth years
    let ageArray = [];
    //console.log(deathMap, birthMap);
    //console.log(today.getFullYear());
    for (i = 0; i < deathMap.length; i++) {
        if (deathMap[i] == null) { // checks if a value in deathMap is undefined, which indicates they haven't died.
            deathMap[i] = today; // assigns death year to today if they aren't dead for calc purposes.
        } else;
    }
    for (i = 0; i < birthMap.length; i++) { // calculates age for each person
        if (deathMap[i] == today) { // if they are not dead, then calculate their current age.
            age = today.getFullYear() - birthMap[i];
            ageArray.push(age);
        } else { // calculate age for those that have passed.
            let ageAtDeath = deathMap[i] - birthMap[i];
            ageArray.push(ageAtDeath);
        }
    }
    //console.log(ageArray);
    let oldestPerson = Math.max.apply(null, ageArray); // finds at what index the oldest person is
    //console.log(oldestPerson);
    let whichPerson = ageArray.indexOf(oldestPerson); // equals the object of the oldest person
    //console.log(nameArray[whichPerson]);
    return nameArray[whichPerson];
};

// Do not edit below this line
module.exports = findTheOldest;
