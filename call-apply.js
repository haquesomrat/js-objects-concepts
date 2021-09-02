const Kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',

    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log('here', this);
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
//call
// Kibria.treatDey.call(heroBalam, 500, 75, 50);
// Kibria.treatDey.call(heroBalam, 250, 35, 20);

Kibria.treatDey.apply(heroBalam, [500, 100, 50]);