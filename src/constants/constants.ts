export const Constants = [
  {
    letter: 'A',
    id: 'a'
  },
  {
    letter: 'B',
    id: 'b'
  },
  {
    letter: 'C',
    id: 'c'
  },
  {
    letter: 'D',
    id: 'd'
  },
  {
    letter: 'E',
    id: 'e'
  },
  {
    letter: 'F',
    id: 'f'
  },
  {
    letter: 'G',
    id: 'g'
  },
  {
    letter: 'H',
    id: 'h'
  },
  {
    letter: 'I',
    id: 'i'
  },
  {
    letter: 'J',
    id: 'j'
  },
  {
    letter: 'K',
    id: 'k'
  },
  {
    letter: 'L',
    id: 'l'
  },
  {
    letter: 'M',
    id: 'm'
  },
  {
    letter: 'N',
    id: 'n'
  },
  {
    letter: 'O',
    id: 'o'
  },
  {
    letter: 'P',
    id: 'p'
  },
  {
    letter: 'Q',
    id: 'q'
  },
  {
    letter: 'R',
    id: 'r'
  },
  {
    letter: 'S',
    id: 's'
  },
  {
    letter: 'T',
    id: 't'
  },
  {
    letter: 'U',
    id: 'u'
  },
  {
    letter: 'V',
    id: 'v'
  },
  {
    letter: 'W',
    id: 'w'
  },
  {
    letter: 'X',
    id: 'x'
  },
  {
    letter: 'Y',
    id: 'y'
  },
  {
    letter: 'Z',
    id: 'z'
  },
];

export const PHONE_PREFIX = "+7";

export const MINIMUM_LENGTH = 3;

export const PHONE_REGEX = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
export const LETTERS_REGEX = /^[a-zA-Z]+$/;

export const ERROR_MESSAGES = {
  REQUIRED: "Fill in all fields!",
  DUPLICATE: "This contact has already been recorded!",
  MIN_LENGTH: (min: number) => `Value cannot be shorter than ${min} letters!`,
  ONLY_LETTERS: "Value must contain English letters!",
  WRONG_PHONE: "Wrong number!",
};
