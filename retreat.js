

module.exports = {
  retreat: (retreatInput) => {
    if (retreatInput == 1) {
      console.log(`We'll continue our fight to save Earth!`);

    } else if (retreatInput == 2) {
      console.log(
        "You are a coward. If we win this battle, your loved ones will know you were not there to defend them."
      );
      process.abort();
    } else {
      console.log("MAKE A DECISION!");
    }
  },
};
