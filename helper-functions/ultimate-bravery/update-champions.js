const request = require('request');
const fs = require('fs');
const path = require('path');

const dirname = __dirname;

function writeToFile(fileName, content){
    try {
        fs.writeFileSync(path.resolve(dirname, fileName), content);
        // file written successfully
      } catch (err) {
        console.error(err);
      }
}

function updateChampions(version = '13.22.1'){
    let url = `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;
    let options = {json: true};
    request(url, options, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };

        if (!error && res.statusCode == 200) {
            let keys = Object.keys(body['data']);
            let championString = '';
            for (let i = 0; i < keys.length; i++) {
                championString += keys[i];
                if (i != keys.length - 1) championString +=' \n';
            }
            writeToFile('champions.txt', championString);
        };
    });   
}

updateChampions();