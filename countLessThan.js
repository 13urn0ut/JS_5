const countLessThan = (nums, threshhold) => nums.filter(num => num < threshhold).length

console.log(countLessThan([1, 2, 3, 4, 5], 2));
console.log(countLessThan([1, 2, 3, 4, 5], 17));
console.log(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
console.log(countLessThan([10, 10, 10, -10, 15, 7], 10));


