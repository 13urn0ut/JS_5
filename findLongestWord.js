const findLongestWord = (str) => {
    const words = str.split(` `)
    const longestWord = words.reduce((acc, word) => word.length > acc.length ? acc = word : acc, ``)
    return longestWord
}

console.log(findLongestWord(`a book full of dogs`))