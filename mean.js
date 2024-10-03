const mean = (nums) => [...nums].reduce((a, b) => a + b, 0) / nums.length

console.log(mean([30, 10, 20]));
console.log(mean([-10, 10]));
