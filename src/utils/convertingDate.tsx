export const convertingDate = (str: string): string => {
  const separator = str.match(/\./) ? str.match(/\./)![0] : /[a-z]/i;
  const splitStringDote = str.split(separator);
  if (!splitStringDote) {
    return '';
  }
  const splitStringAlpha = splitStringDote[0].split(/[a-z]/i);
  if (splitStringAlpha.length < 2) {
    return '';
  }
  return `${splitStringAlpha[1]}/${splitStringAlpha[0]}`;
};
