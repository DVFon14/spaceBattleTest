

console.log(
  "\nAliens are attacking our planet! Join us in our battle to save Earth.\n"
);

console.log(
  "Each soldier will be off to face a squadron of 6. Don't worry, they attack one at a time.\n"
);

console.log(
  "The odds are in your favor, as your Hull is a solid 20, while theirs is between 3 and 6;"
);
console.log("your firepower is 5, while theirs is between 2 and 4;");
console.log("and your accuracy is 0.7, while theirs is between 0.6 and 0.8 \n");

const prompt = require("prompt-sync")();

const begin = prompt(
  "Press 1 to begin. If you press anything else, our world explodes."
);
//console.log(typeof(begin))

if (begin == "1") {
  console.log("Brave soldier! Let's begin");
  console.log("You will attack first!");
} else {
  console.log(
    `You have caused the demise of our entire world and species. I hope you're proud of yourself!!!`
  );
}







//we're going to need a for loop here, where i=0; i<6; i++ to iterate through every ship.

const ourShip = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};

class enemyShipClass {
  constructor() {
    this.e_hull = Math.random() * 3 + 3;
    this.e_firepower = Math.random() * 2 + 2;
    this.e_accuracy = Math.random() * 0.2 + 0.6;
  }
}

const shipsArray = [];

for (i = 0; i < 6; i++) {
  const enemyShips = new enemyShipClass();
  shipsArray.push(enemyShips);
}

//console.log(shipsArray[0].e_accuracy);
console.log(shipsArray[0].e_hull);
//console.log(shipsArray[0].e_firepower);








function attack() {
const accuracyTester = Math.random()
//console.log(accuracyTester)

//if we hit
if (accuracyTester < 0.7) {  

  shipsArray[0].e_hull = shipsArray[0].e_hull - ourShip.firepower;

  //console.log(typeof(shipsArray[0].e_hull))
  console.log(
    `Due to your superior accuracy, you hit the enemy ship! Their hull is now ${shipsArray[0].e_hull}`
  );


// if we destroy
 if (shipsArray[0].e_hull <= 0) {    

    console.log(`Congratulations, soldier! You have defeated this enemy ship.`);
    console.log(`Press 1 to continue attacking or 2 to retreat`);

    let { retreat } = require("./retreat.js"); // option to retreat

    let continueGame = (userInput2) => {
      let input2 = userInput2;
      retreat(input2);
    };

    process.stdin.on("data", continueGame);
  }

  //if we hit but do not destroy
else if (shipsArray[0].e_hull > 0) {
  console.log('This battle isn\'t over yet!')
  enemyAttack();
}
//if we miss
else{
  console.log("You missed! Take cover, they're about to attack!");
  enemyAttack()
}
}
}

attack();



 


function enemyAttack(){

const accuracyTester = Math.random()
console.log(accuracyTester)

//if they hit us 
if (accuracyTester < shipsArray[0].e_accuracy){
   ourShip.hull = ourShip.hull-shipsArray[0].e_firepower;
  console.log(`They hit you! Our hull is now ${ourShip.hull}`);

//if they hit and destroy us
if (ourShip.hull <= 0){
  console.log(`You tried your best soldier. Unfortunately, it wasn't good enough this time. Goodbye to the human race.`)
  process.abort();
}

//else if they hit but do not destroy us
else if (ourShip.hull > 0){
  console.log('Hang in there, you can still win this!')
  attack();
}
}

//else if they miss us

else{
  console.log('That was closed, but they missed you! Get ready to attack.')
  attack();
}

}


