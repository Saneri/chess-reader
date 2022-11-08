import { PlayerColor, SpeechMap } from './types';

const sleep = (timeMs: number): string => {
  return `[[slnc ${timeMs}]]`;
};

export const convertMoveToSpeech = (move: string): string => {
  const firstChar: string = move.charAt(0);
  if (firstChar === 'O') {
    return (SpeechMap as any)[move] ?? '';
  }
  if (move.length === 2) {
    return `pawn moves to ${move}`;
  }
  const pieceType = (SpeechMap as any)[firstChar] ?? `${firstChar} pawn`;
  if (move.includes('x')) {
    const moveTarget = move.split('x')[1];
    return `${pieceType} ${SpeechMap['x']} ${moveTarget}`;
  }
  const moveTarget = move.slice(1);
  return `${pieceType} moves to ${moveTarget}`;
};

export const parsePgnToReadableString = (
  data: string,
  timeBetweenMovesMs: number
): string => {
  const re: RegExp =
    /\d{1,3}\.[ \n][\w\-+]+[ \n]*[\w\-+\/]*[ \n]*(1-0|0-1|1\/2-1\/2)*/g;
  const pgnArray: string[] = data.match(re) ?? [];

  const parsed = pgnArray.map((chessMove) => {
    const moveArray: string[] = chessMove.trim().split(/ |\n/);
    if (moveArray.length !== 3 && moveArray.length !== 4)
      throw `invalid data: ${chessMove}`;

    const whiteMove = convertMoveToSpeech(moveArray[1]);
    const blackMove = convertMoveToSpeech(moveArray[2]);
    const endOfGameMove =
      moveArray.length === 4 ? convertMoveToSpeech(moveArray[3]) : '';

    return `${PlayerColor[PlayerColor.White]} ${whiteMove} ${sleep(
      timeBetweenMovesMs
    )} ${PlayerColor[PlayerColor.Black]} ${blackMove} ${endOfGameMove}`;
  });

  return parsed.join(sleep(timeBetweenMovesMs));
};
