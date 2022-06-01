const main = document.getElementById("main");
const addUser = document.getElementById("add_user");
const makeDouble = document.getElementById("make_double");
const millionaires = document.getElementById("show_millionaires");
const sort = document.getElementById("sort");
const calculate = document.getElementById("calculate");

let data = [];
//--Fetch Random User
getRandonUser();
getRandonUser();
getRandonUser();
async function getRandonUser() {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 100000)
    };
    addData(newUser);
}

// Find Millionaires

function findMillionaires() {
    data = data.filter(user => user.money > 10000000);
    updateDOM();
};

// find the Total 

function total() {
    const Wealth = data.reduce((acc, user) => (acc += user.money), 0);
    const wealthAfter = document.createElement('div');
    wealthAfter.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(Wealth)}</strong></h3>`;
    main.appendChild(wealthAfter);
};


// Sort Richest

function sortRichest() {
    data.sort((a, b) => b.money - a.money);
    updateDOM();
};
// Doubles Money

function doubleMoney() {
    data = data.map((user) => {
        return {
            ...user,
            money: user.money * 2
        };
    });
    updateDOM();
}
// --add new data
function addData(object) {
    data.push(object);
    updateDOM();
}
//--update DOM
function updateDOM(providedData = data) {
    //-- Clear the Main Div
    main.innerHTML = ' <h2><strong>Person</strong>Wealth</> ';
    providedData.forEach(item => {
        const element = document.createElement("div");
        element.classList.add("person");
        element.innerHTML = `<straon>${item.name}</straon>${formatMoney(item.money)}`;
        main.appendChild(element);

    });

}
// format Money 
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event Listener

addUser.addEventListener('click', getRandonUser);
makeDouble.addEventListener('click', doubleMoney);
sort.addEventListener('click', sortRichest);
millionaires.addEventListener('click', findMillionaires);
calculate.addEventListener('click', total);