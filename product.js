const multiply = (nums) => {
    const newArr = [...nums]
    const product = newArr.reduce((acc, num) => acc * num, 1)
    return product
}

console.log(multiply([2, 4, 6]));
console.log(multiply([-10, 10]));
