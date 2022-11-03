export const isAllCases = (value) => {
  const upper = /[A-Z]/.test(value);
  const lower = /[a-z]/.test(value);

  return upper && lower;
};

export const isNumbers = (value) => /\d/.test(value);
