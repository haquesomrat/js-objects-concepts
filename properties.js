const bottle = {
    color: 'yellow', hold: 'water', price: 150, isCleaned: true
};

//getting all properties
const keys = Object.keys(bottle);
// console.log(keys);
//get all values
const values = Object.values(bottle);
// console.log(values);
//getting all properties
const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
//delete any property
delete bottle.isCleaned;

// console.log(bottle);

const getGirlFriend = (name = "chokina") => "name";
console.log(getGirlFriend());