export enum PlayerColor {
  White,
  Black
}

export enum SpeechMap {
  B = 'bishop',
  K = 'king',
  N = 'knight',
  P = 'pawn',
  Q = 'queen',
  R = 'rook',
  x = 'captures',
  'O-O' = 'kingside castle',
  'O-O-O' = 'queenside castle',
  '+' = 'with check',
  '1-0' = 'white wins',
  '0-1' = 'black wins',
  '1/2-1/2' = 'draw'
}
