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
        money: Math.floor(Math.random() * 1000000000)
    };
    addData(newUser);
}
// --add new data
function addData(object) {
    data.push(object);
    updateDOM();
}
//--update DOM
function updateDOM(providedData = data) {
    //-- Clear the Main Div
    main.innerHTML = ' <h2><strong>Person</strong>Wealth</h2> ';
    providedData.forEach();

}