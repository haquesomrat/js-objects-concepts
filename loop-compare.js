//shift+alt+ A ===>> for multiple line comment

const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 150,
    isCleaned: true
};
/*
for(let i; i>10; i++){}
for(const num of nums){}  //array
for(const prop in student){} //object
 */
for (const prop in bottle) {
    console.log(prop, bottle[prop]);
}