import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';

const csvFileReader = new CsvFileReader('./football.csv');
csvFileReader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
let manUnitedWins = 0;

for (let match of csvFileReader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
console.log(`Date of 28/10/2020: ${dateStringToDate('28/10/2020')}`);
