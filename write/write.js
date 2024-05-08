const fs = require('fs');

// Contenuto da scrivere nel file
const content = 'Esercizio per Develhope perchè mi sta piacendo un casino!';

// Scrivi il contenuto nel file
fs.writeFile('output.txt', content, (err) => {
  if (err) {
    console.error('Errore nella scrittura del file:', err);
    return;
  }
  console.log('Il file è stato scritto con successo!');
});