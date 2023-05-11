export const isValidSymbols = (value: string): boolean =>
  /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(value);

export const isFirstSymbol = (value: string | undefined): boolean =>
  /[A-Za-z]/.test(value?.split('@')[0]?.split('')?.[0] ?? '');
