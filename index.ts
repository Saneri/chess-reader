import { readFileSync } from 'fs';
import { join } from 'path';
import { parsePgnToReadableString } from './parse/parse';
import Say from 'say';

const FILENAME = 'game1.pgn';

const settings = {
  readSpeed: 0.8,
  pauseBetweenMovesMs: 1500
};

const pgnData: string = readFileSync(
  join(__dirname, `data/${FILENAME}`),
  'utf8'
).split('\n\n')[1];

const readableString: string = parsePgnToReadableString(
  pgnData,
  settings.pauseBetweenMovesMs
);

Say.speak(readableString, 'Alex', settings.readSpeed, (error: string) => {
  if (error) {
    console.error(error);
  }
});
