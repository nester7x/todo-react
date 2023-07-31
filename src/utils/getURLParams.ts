export const getURLParams = (url: string, value: string) => {
  const curentParam = url
    .replace('?', '')
    .split('&')
    .find((query) => query.startsWith(value))
  return  curentParam ? curentParam.replace(`${value}=`, '') : ''
}
