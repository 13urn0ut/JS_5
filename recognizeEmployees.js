const recognizeEmployees = (empArr, empOfMonthArr) => {
    const resultArr = empArr.map(empName => empOfMonthArr.includes(empName) ? `Outstanding job, ${empName}!` : `Great job, ${empName}!`);
    return resultArr
}

console.log(recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill']));
console.log(recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan']));
console.log(recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan']));
