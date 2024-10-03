// assignment by reference

// const array1 = [`wtf`, `ftw`, `bbc`]

// const array2 = [...array1]

// array2.push(`Rrrr`)

// console.log(array2)
// console.log(array1)

// const testArr =  (...args) => {
//     return args.reduce((a, b) => a + b, 0)
// }

// console.log(testArr(3, 8, -14, 6))

// const nums = [4, -5, 3];
// const calcSqr = (num, i) => {
//   return { id: i, number: num };
// };
// const sqrNums = nums.map(calcSqr);

// console.log(nums, sqrNums);


import users from './users.json' assert {type: 'json'}

// console.log(usersJSON);



// const users = JSON.parse(usersJSON)

const filteredUsers = users.filter(user => user.version > 3 && user.version < 6)

console.log(users.length, filteredUsers.length);
