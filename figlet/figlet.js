const fs = require('fs');
const figlet = require('figlet');

fs.readFile('README.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Errore nella lettura del file:', err);
    return;
  }

  figlet(data, function(err, data) {
    if (err) {
      console.log('Qualcosa è andato storto...');
      console.dir(err);
      return;
    }
    console.log(data);
  });
});