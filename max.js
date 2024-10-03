const numbers = [2, 7, 3, 9, 3, 54, 76, 25, 26, 347, 5, 547, 463]

const findMax = (nums) => {
    const newArr = [...nums].sort((a, b) => b - a)
    return newArr[0]
}

console.log(findMax(numbers));
