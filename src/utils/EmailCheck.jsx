export const isValidSymbols = (value) =>
  /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(value);

export const isFirstSymbol = (value) =>
  /[A-Za-z]/.test(value.split('@')[0].split('').shift());
