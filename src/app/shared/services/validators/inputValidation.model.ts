
export class InputValidationModel {
  type: string;
  compare: any;
  isRegex: boolean;

  constructor(type: string, compare: any, isRegex: boolean) {
  }
}

export class ComparatorValues {
  accept : string[];
  reject : string[];
}

export const inputValidation: any = [
  {
    type:'linkOlder',
    isRegex: false,
    minLength: 8,
    compare: {
      accept: ['http://', 'https://'],
      reject: [' ']
    },
  },
  {
    type:'linkNew',
    compare: {
      accept: [/[a-zA-z0-9]/gi],
      reject: [/[^\w\s-]/gi]
    },
    isRegex: true,
    minLength: 4,
  },
]
