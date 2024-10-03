const numbers = [24, 6, 4326, 43, 724, 9, 2463, 2463, 235, 6, 436]

const add = (nums = numbers) => {
    const newArr = [...nums];
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum
}

const addReduce = (nums = numbers) => {
    const newArr = [...nums];
    const sum = newArr.reduce((a, b) => a + b, 0)
    return sum
}

console.log(add());
console.log(addReduce());
