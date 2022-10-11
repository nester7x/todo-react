export const convertingDate = (str) => {
  const splitStringDote = str.split(str.match(/\./));
  return `${splitStringDote[0].split(str.match(/[a-z]/i))[1]}/${
    splitStringDote[0].split(str.match(/[a-z]/i))[0]
  }`;
};
