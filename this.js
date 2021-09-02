const Kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function () {
        const myArrrow = () => console.log(this);
        myArrow();
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here', this);
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

function add() {
    console.log(this);
}