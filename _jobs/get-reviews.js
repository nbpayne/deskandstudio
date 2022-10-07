// Grab reviews and save to file system
const https = require('node:https');
const file = require('node:fs');
const url = 'https://deskandstudio.simplybook.me/v2/review/list/?page=1&perPage=10';
const fileName = 'data/reviews.json';

// Getting JSON...
https.get(url, (response) => {
  console.log('Getting JSON...');

  // Check response
  if(response.statusCode == 200) {
    // Good response
    console.log('Good response :) :' + response.statusCode);

    // Receive data
    response.on('data', (data) => {
      // Write file
      console.log('Receiving data and writing to `' + fileName + '`...');
      file.writeFile(fileName, data, function(error) {
        // Did we do OK?
        if(error) {
          // Something went wrong writing the file
          console.log('Something went wrong writing `' + fileName + '`')
          console.log(error); 
        } else {
          // Yay!
          console.log('Done!');
        }
        
      });
    });
  } else {
    // Bad response
    console.log('Bad response :( :' + response.statusCode);
  };
}).on('error', (error) => {
  console.error(error);
});
