const fs = require('fs');

exports.handler = async (event) => {
    let body = JSON.parse(event.body);

    if (body.readData) {
      let dataFile = require('/tmp/data.json');

      return {
          statusCode: 200,
          body: JSON.stringify(dataFile)
      }
    } else if (body.saveData) {
      let dataFile = require('/tmp/data.json');
      let randomID = Math.round(Math.random()*10000);
      dataFile[randomID] = 'Saved';

      fs.writeFileSync('/tmp/data.json', JSON.stringify(dataFile));

      return {
          statusCode: 200,
          body: JSON.stringify(dataFile)
      }
    }

}