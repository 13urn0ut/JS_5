const anyPositive = (arr) => [...arr].some(num => num > 0)


console.log(anyPositive([1, 2, 3, 4, 5]));
console.log(anyPositive([1, 2, -3, 4, 5]));
console.log(anyPositive([0, 0, 1]));
console.log(anyPositive([-10, -10, -10]));
console.log(anyPositive([-10, -10, 1]));
