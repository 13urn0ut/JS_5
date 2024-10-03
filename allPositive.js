const allPositive = (arr) => [...arr].every(num => num > 0)

console.log(allPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 23]))
console.log(allPositive([1, 2, 3, 4, 5, 6, 7, 8, -9, 23]))
console.log(allPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 0]))
console.log(allPositive([1, 2, 3, 4, 5]))
console.log(allPositive([1, 2, -3, 4, 5]))
console.log(allPositive([0, 0, 1]))