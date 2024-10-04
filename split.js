const split = (str, delimiter) => {
  let strArr = [];
  let subStr = ``
  const myDelimiter = `-`
  const newStr = str.replaceAll(delimiter, myDelimiter)
  for (let i = 0; i < newStr.length; i++) {

    if (newStr[i] === myDelimiter) {
        strArr.push(subStr);
        subStr = ``;
        continue
    }
    subStr += newStr[i]
  }
  strArr.push(subStr);
  return strArr
};

console.log(split(`a-b-c`, `-`));
console.log(split('APPLExxBANANAxxCHERRY', 'xx'));
console.log(split('xyz', 'r'));



