const suspectsArray = ["Eli" , "Lewis" , "Bob", "Joe" , "Britt", "Michael"];
const weaponsArray = ["Knife", "Hammer", "Screwdriver", "Rope", "Bottle", "Wire", "Bat", "Shovel"];
const roomsArray = ["Bedroom", "Living Room", "Kitchen", "Garage", "Dining Room", "Library", "Closet", "Tool Room", "Study Room", "Game Room"];

function selectRandom(array) {
    const random = array(math.random() *array.length);
    return array(random);
}

function pickMystery() {
    const mystery = {
        suspect: selectRandom(suspectsArray), 
        weapon: selectRandom(weaponsArray), 
        room: selectRandom(roomsArray)
    };
    return mystery;
}

function revealMystery(mystery) {
    return `${mystery.suspect} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}.`;
}
function start() {
    const mystery = pickMystery();
    const message = revealMystery(mystery);
    document.getElementById('mysteryReveal').innerText = message;
}