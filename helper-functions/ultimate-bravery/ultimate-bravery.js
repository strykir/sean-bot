const fs = require('fs');
const path = require('path');
const math = require('mathjs');
const dirname = __dirname;

module.exports = { generateRandomRunes, generateRandomChampion, generateChampLink, generateRandomSumms, generateRandomItems, pickDomination };

function stringArrayFromTextInDir(fileName){
  try {
    var textFile = fs.readFileSync(path.resolve(dirname, fileName), 'utf8');
  } catch (err) {
    console.error(err);
  }
  let textArray = textFile.split('\n');
  for (let i = 0; i < textArray.length; i++){ // remove ' \n' from end of each string
    textArray[i] = textArray[i].substring(0, textArray[i].length - 1);
  }

  return textArray;
}

function generateRandomRunes(){
  const NUMOFRUNE = 5;
  const MAJOR = true;
  const MINOR = false;
  const RUNELIST = [pickDomination, pickInspiration, pickPrecision, pickResolve, pickSorcery];

  let primaryRune = math.randomInt(NUMOFRUNE);
  let secondaryRune = math.randomInt(NUMOFRUNE);
  
  while (primaryRune == secondaryRune) secondaryRune = math.randomInt(NUMOFRUNE); // cannot have two of the same rune paths

  let runes = RUNELIST[primaryRune](MAJOR) + RUNELIST[secondaryRune](MINOR) + pickShards();

  return runes;
}

function pickDomination(major = true){
    const RUNEARRAY = stringArrayFromTextInDir('domination-runes.txt');
    
    const KEYSTONES = RUNEARRAY.slice(0, 4);
    const SLOT1 = RUNEARRAY.slice(4, 7);
    const SLOT2 = RUNEARRAY.slice(7, 10);
    const SLOT3 = RUNEARRAY.slice(10, 15);

    let pickedRunesArray = [
                            KEYSTONES[math.randomInt(4)] 
                          , SLOT1[math.randomInt(3)]
                          , SLOT2[math.randomInt(3)]
                          , SLOT3[math.randomInt(4)]
                           ];
    
    if (!major) {
      pickedRunesArray[0] = ''; // remove keystone
      pickedRunesArray[math.randomInt(3) + 1] = ''; // remove one non-keystone rune
    }
    
    let returnString = '';
    for (let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
    return returnString;
}

function pickPrecision(major = true){
  const RUNEARRAY = stringArrayFromTextInDir('precision-runes.txt');

  const KEYSTONES = RUNEARRAY.slice(0, 4);
  const SLOT1 = RUNEARRAY.slice(4, 7);
  const SLOT2 = RUNEARRAY.slice(7, 10);
  const SLOT3 = RUNEARRAY.slice(10, 14);

  let pickedRunesArray = [
                          KEYSTONES[math.randomInt(4)] 
                        , SLOT1[math.randomInt(3)]
                        , SLOT2[math.randomInt(3)]
                        , SLOT3[math.randomInt(3)]
                         ];
  
   if (!major) {
    pickedRunesArray[0] = ''; // remove keystone
    pickedRunesArray[math.randomInt(3) + 1] = ''; // remove one non-keystone rune
  }
  
  let returnString = '';
  for(let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
  return returnString;
}

function pickSorcery(major = true){ // reimplement this with above stuff
  let runesArray = stringArrayFromTextInDir('sorcery-runes.txt');

  let pickedRunesArray = new Array(4);
  pickedRunesArray[0]= "";
  if (major) pickedRunesArray[0] = runesArray[math.randomInt(2)];
  pickedRunesArray[1] = runesArray[math.randomInt(2) + 3];
  pickedRunesArray[2] = runesArray[math.randomInt(2) + 6];
  pickedRunesArray[3] = runesArray[math.randomInt(2) + 9];
  
  if (!major) pickedRunesArray[math.randomInt(2) + 1] = "";
  
  let returnString = "";
  for(let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
  return returnString;
}

function pickInspiration(major = true){
  let runesArray = stringArrayFromTextInDir('inspiration-runes.txt');

  let pickedRunesArray = new Array(4);
  pickedRunesArray[0]= "";
  if (major) pickedRunesArray[0] = runesArray[math.randomInt(2)];
  pickedRunesArray[1] = runesArray[math.randomInt(1) + 3];
  pickedRunesArray[2] = runesArray[math.randomInt(2) + 5];
  pickedRunesArray[3] = runesArray[math.randomInt(2) + 8];
  
  if (!major) pickedRunesArray[math.randomInt(2) + 1] = "";
  
  let returnString = "";
  for(let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
  return returnString;
}

function pickResolve(major = true){
  let runesArray = stringArrayFromTextInDir('resolve-runes.txt');

  let pickedRunesArray = new Array(4);
  pickedRunesArray[0]= "";
  if (major) pickedRunesArray[0] = runesArray[math.randomInt(2)];
  pickedRunesArray[1] = runesArray[math.randomInt(2) + 3];
  pickedRunesArray[2] = runesArray[math.randomInt(2) + 6];
  pickedRunesArray[3] = runesArray[math.randomInt(2) + 9];
  
  if (!major) pickedRunesArray[math.randomInt(2) + 1] = "";
  
  let returnString = "";
  for(let i = 0; i < 4; i++) returnString += pickedRunesArray[i];
  return returnString;
}

function pickShards(){
  let shardsArray = stringArrayFromTextInDir('rune-shards.txt');

  const AF    = shardsArray[0];
  const MS    = shardsArray[1];
  const AS    = shardsArray[2];
  const CDR   = shardsArray[3];
  const HP    = shardsArray[4];
  const HPS   = shardsArray[5];
  const TEN   = shardsArray[6];

  const SHARD1 = [AF, AS , CDR];
  const SHARD2 = [AF, MS , HPS];
  const SHARD3 = [HP, TEN, HPS];

  let pickedShards = SHARD1[math.randomInt(3)] + SHARD2[math.randomInt(3)] + SHARD3[math.randomInt(3)];

  return pickedShards;
}

function generateRandomItems(){
  let hasSpellShield = false;
  let hasMagicPen = false;
  let hasArmorPen = false;
  let hasHydra = false;
  let hasBurn = false;
  let hasLifeline = false;
  let hasManaflow = false;
  let hasMomentum = false;
  let hasSpellblade = false;
  let hasCritAug = false;

  let bootsArray = stringArrayFromTextInDir('boots.txt');
  let itemsArray = stringArrayFromTextInDir('items.txt');

  let returnString = '';
  returnString += bootsArray[math.randomInt(7)];
  
  let itemIndices = [0, 0, 0, 0, 0, 0];

  for(let i = 0; i < 6; i++){
    let itemIsValid = false;
    while(!itemIsValid){
      itemIndices[i] = math.randomInt(94);
      for (let j = 0; j < i; j++){
        if (itemIndices[i] == itemIndices[j]){
          itemIndices[i] = math.randomInt(94);
          j = -1;
        }
      }

      if (hasSpellShield && (itemChoice == 65 || itemChoice == 66)) continue;
      if (hasMagicPen && (67 <= itemChoice && itemChoice < 70)) continue;
      if (hasArmorPen && (70 <= itemChoice && itemChoice < 74)) continue;
      if (hasHydra && (74 <= itemChoice && itemChoice < 78)) continue;
      if (hasBurn && (itemChoice == 78 || itemChoice == 79)) continue;
      if (hasLifeline && (80 <= itemChoice && itemChoice < 84)) continue;
      if (hasManaflow && (84 <= itemChoice && itemChoice < 86)) continue;
      if (hasMomentum && (itemChoice == 86 || itemChoice == 87)) continue;
      if (hasSpellblade && (88 <= itemChoice || itemChoice < 92)) continue;
      if (hasCritAug && (itemChoice == 92 || itemChoice == 93)) continue;

      itemIsValid = true;
    }
  }
  
  for (let i = 0; i < 6; i++) returnString += itemsArray[itemIndices[i]];

  return returnString;
}

function generateRandomSumms(){
  let spellsArray = stringArrayFromTextInDir('summoner-spells.txt');

  let spellIndices = [-1,-1];
  spellIndices[0] = math.randomInt(spellsArray.length);
  spellIndices[1] = math.randomInt(spellsArray.length);

  while (spellIndices[0] == spellIndices[1]) spellIndices[1] = math.randomInt(spellsArray.length);

  let returnString = spellsArray[spellIndices[0]] + ' ' + spellsArray[spellIndices[1]];
  return returnString; 
}

function generateRandomChampion(){
  let champsArray = stringArrayFromTextInDir('champions.txt');
  return champsArray[math.randomInt(champsArray.length)];
}

function generateChampLink(champName){
  const version = '13.22.1';
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champName}.png`;
}
