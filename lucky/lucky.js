function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  // Promise chain
  luckyDraw("Keigo")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    })
    .then(() => {
      return luckyDraw("Touya");
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    })
    .then(() => {
      return luckyDraw("Itachi");
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });
  