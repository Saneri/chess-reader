import { convertMoveToSpeech } from './parse';

describe('convertMoveToSpeech', () => {
  it('should convert pawn movement', () => {
    const input = 'h5';
    const exp = 'pawn moves to h5';
    expect(convertMoveToSpeech(input)).toBe(exp);
  });

  it('should convert piece movement', () => {
    const input = 'Nf6';
    const exp = 'knight moves to f6';
    expect(convertMoveToSpeech(input)).toBe(exp);
  });

  it('should convert pawn capture', () => {
    const input = 'exd5';
    const exp = 'e pawn captures d5';
    expect(convertMoveToSpeech(input)).toBe(exp);
  });

  it('should convert piece capture', () => {
    const input = 'Qxf2';
    const exp = 'queen captures f2';
    expect(convertMoveToSpeech(input)).toBe(exp);
  });

  it('should convert castle', () => {
    const input = 'O-O';
    const exp = 'kingside castle';
    expect(convertMoveToSpeech(input)).toBe(exp);
  });
});
