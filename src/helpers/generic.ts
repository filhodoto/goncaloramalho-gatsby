export const getCurrentYear = (date = new Date()): number => date.getFullYear();

export const arrayNotEmpty = (arr: any[]): boolean =>
  typeof arr != 'undefined' && arr != null && arr.length > 0;

export const pxToRem = (x: number): string => `${x / 16}rem`;

export const randomNumber = (max: number, min = 0): number =>
  Math.round(Math.random() * (max - min) + min);
