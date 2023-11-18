const fs = require('fs');
const path = require('path');
const math = require('mathjs');
const dirname = __dirname;

module.exports = { generateRandomRunes, generateRandomChampion, generateChampLink, generateRandomSumms, generateRandomItems };

function generateRandomRunes(){
    let runes = '';
    let primaryRune = math.randomInt(5);
    let secondaryRune = math.randomInt(5);
    while (primaryRune == secondaryRune) secondaryRune = math.randomInt(5);

    switch(primaryRune){
      case 0:
        runes += pickDomination();
        break;
      case 1:
        runes += pickInspiration();
        break;
      case 2:
        runes += pickPrecision();
        break;
      case 3:
        runes += pickResolve();
        break;
      case 4:
        runes += pickSorcery();
        break;
    }

    switch(secondaryRune){
      case 0:
        runes += pickDomination(false);
        break;
      case 1:
        runes += pickInspiration(false);
        break;
      case 2:
        runes += pickPrecision(false);
        break;
      case 3:
        runes += pickResolve(false);
        break;
      case 4:
        runes += pickSorcery(false);
        break;
    }
    
    runes += pickShards();

    return runes;
}

function pickDomination(majorOrMinor = true){
    try {
      var runes = fs.readFileSync(path.resolve(dirname, 'domination-runes.txt'), 'utf8');
    } catch (err) {
      console.error(err);
    }
    
    let runesArray = runes.split('\n');

    for (let i = 0; i < runesArray.length; i++){
        runesArray[i] = runesArray[i].substring(0, runesArray[i].length - 1);
    }

    let pickedRunesArray = new Array(4);
    pickedRunesArray[0]= "";
    if (majorOrMinor) pickedRunesArray[0] = runesArray[math.randomInt(3)];
    pickedRunesArray[1] = runesArray[math.randomInt(2) + 4];
    pickedRunesArray[2] = runesArray[math.randomInt(2) + 7];
    pickedRunesArray[3] = runesArray[math.randomInt(3) + 10];
    
    if (!majorOrMinor) pickedRunesArray[math.randomInt(2) + 1] = "";
    
    let returnString = "";
    for(let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
    return returnString;
}

function pickPrecision(majorOrMinor = true){
  try {
    var runes = fs.readFileSync(path.resolve(dirname, 'precision-runes.txt'), 'utf8');
  } catch (err) {
    console.error(err);
  }
  
  let runesArray = runes.split('\n');

  for (let i = 0; i < runesArray.length; i++){
    runesArray[i] = runesArray[i].substring(0, runesArray[i].length - 1);
  }

  let pickedRunesArray = new Array(4);
  pickedRunesArray[0]= "";
  if (majorOrMinor) pickedRunesArray[0] = runesArray[math.randomInt(3)];
  pickedRunesArray[1] = runesArray[math.randomInt(2) + 4];
  pickedRunesArray[2] = runesArray[math.randomInt(2) + 7];
  pickedRunesArray[3] = runesArray[math.randomInt(2) + 10];
  
  if (!majorOrMinor) pickedRunesArray[math.randomInt(2) + 1] = "";
  
  let returnString = "";
  for(let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
  return returnString;
}

function pickSorcery(majorOrMinor = true){
  try {
    var runes = fs.readFileSync(path.resolve(dirname, 'sorcery-runes.txt'), 'utf8');
  } catch (err) {
    console.error(err);
  }
  
  let runesArray = runes.split('\n');

  for (let i = 0; i < runesArray.length; i++){
    runesArray[i] = runesArray[i].substring(0, runesArray[i].length - 1);
  }

  let pickedRunesArray = new Array(4);
  pickedRunesArray[0]= "";
  if (majorOrMinor) pickedRunesArray[0] = runesArray[math.randomInt(2)];
  pickedRunesArray[1] = runesArray[math.randomInt(2) + 3];
  pickedRunesArray[2] = runesArray[math.randomInt(2) + 6];
  pickedRunesArray[3] = runesArray[math.randomInt(2) + 9];
  
  if (!majorOrMinor) pickedRunesArray[math.randomInt(2) + 1] = "";
  
  let returnString = "";
  for(let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
  return returnString;
}

function pickInspiration(majorOrMinor = true){
  try {
    var runes = fs.readFileSync(path.resolve(dirname, 'inspiration-runes.txt'), 'utf8');
  } catch (err) {
    console.error(err);
  }
  
  let runesArray = runes.split('\n');

  for (let i = 0; i < runesArray.length; i++){
    runesArray[i] = runesArray[i].substring(0, runesArray[i].length - 1);
  }

  let pickedRunesArray = new Array(4);
  pickedRunesArray[0]= "";
  if (majorOrMinor) pickedRunesArray[0] = runesArray[math.randomInt(2)];
  pickedRunesArray[1] = runesArray[math.randomInt(1) + 3];
  pickedRunesArray[2] = runesArray[math.randomInt(2) + 5];
  pickedRunesArray[3] = runesArray[math.randomInt(2) + 8];
  
  if (!majorOrMinor) pickedRunesArray[math.randomInt(2) + 1] = "";
  
  let returnString = "";
  for(let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
  return returnString;
}

function pickResolve(majorOrMinor = true){
  try {
    var runes = fs.readFileSync(path.resolve(dirname, 'resolve-runes.txt'), 'utf8');
  } catch (err) {
    console.error(err);
  }
  
  let runesArray = runes.split('\n');

  for (let i = 0; i < runesArray.length; i++){
    runesArray[i] = runesArray[i].substring(0, runesArray[i].length - 1);
  }

  let pickedRunesArray = new Array(4);
  pickedRunesArray[0]= "";
  if (majorOrMinor) pickedRunesArray[0] = runesArray[math.randomInt(2)];
  pickedRunesArray[1] = runesArray[math.randomInt(2) + 3];
  pickedRunesArray[2] = runesArray[math.randomInt(2) + 6];
  pickedRunesArray[3] = runesArray[math.randomInt(2) + 9];
  
  if (!majorOrMinor) pickedRunesArray[math.randomInt(2) + 1] = "";
  
  let returnString = "";
  for(let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
  return returnString;
}

function pickShards(){
  try {
    var shards = fs.readFileSync(path.resolve(dirname, 'rune-shards.txt'), 'utf8');
  } catch (err) {
    console.error(err);
  }

  let shardsArray = shards.split('\n');

  for (let i = 0; i < shardsArray.length; i++){
    shardsArray[i] = shardsArray[i].substring(0, shardsArray[i].length - 1);
  }

  let pickedShards ='';
  
  // first shard
  switch(math.randomInt(3)){
    case 0:
      pickedShards += shardsArray[0];
      break;
    case 1:
      pickedShards += shardsArray[2];
      break;
    case 2:
      pickedShards += shardsArray[3];
      break;
  }
  
  // second shard
  switch(math.randomInt(3)){
    case 0:
      pickedShards += shardsArray[0];
      break;
    case 1:
      pickedShards += shardsArray[1];
      break;
    case 2:
      pickedShards += shardsArray[5];
      break;
  }
  
  // third shard
  switch(math.randomInt(3)){
    case 0:
      pickedShards += shardsArray[4];
      break;
    case 1:
      pickedShards += shardsArray[1];
      break;
    case 2:
      pickedShards += shardsArray[5];
      break;
  }

  return pickedShards;
}

function generateRandomItems(){
  return 'items will be given heheheha';
}

function generateRandomSumms(){
  try {
    var spells = fs.readFileSync(path.resolve(dirname, 'summoner-spells.txt'), 'utf8');
  } catch (err) {
    console.error(err);
  }

  let spellsArray = spells.split('\n');

  for (let i = 0; i < spellsArray.length; i++){
    spellsArray[i] = spellsArray[i].substring(0, spellsArray[i].length - 1);
  }

  let spellIndices = [-1,-1];
  spellIndices[0] = math.randomInt(spellsArray.length);
  spellIndices[1] = math.randomInt(spellsArray.length);

  while (spellIndices[0] == spellIndices[1]) spellIndices[1] = spellsArray[math.randomInt(spellsArray.length)];

  let returnString = spellsArray[spellIndices[0]] + ' ' + spellsArray[spellIndices[1]];
  return returnString; 
}

function generateRandomChampion(){
  try {
    var champs = fs.readFileSync(path.resolve(dirname, 'champions.txt'), 'utf8');
  } catch (err) {
    console.error(err);
  }

  let champsArray = champs.split('\n');

  for (let i = 0; i < champsArray.length; i++){
    champsArray[i] = champsArray[i].substring(0, champsArray[i].length - 1);
  }

  return champsArray[math.randomInt(champsArray.length)];
}

function generateChampLink(champName){
  return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champName}.png`;
}