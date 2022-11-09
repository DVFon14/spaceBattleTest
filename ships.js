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
