export const isAllCases = (value: string): boolean => {
  const upper = /[A-Z]/.test(value);
  const lower = /[a-z]/.test(value);

  return upper && lower;
};

export const isNumbers = (value: string): boolean => /\d/.test(value);
