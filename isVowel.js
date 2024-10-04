const isVowel = (char) => {
    const vowelArr = ["a", "e", "u", "i", "o"]
    if (typeof char === `string` && char.length === 1) return vowelArr.includes(char.toLowerCase());
    return false
}

console.log(isVowel('c'))
console.log(isVowel('e'))
console.log(isVowel('A'))
console.log(isVowel(99))
console.log(isVowel({e: "Elephant"}))