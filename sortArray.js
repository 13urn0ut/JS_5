const bubbleSort = (arr) => {
  const start = Date.now();
  const newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        const temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  console.log(Date.now() - start);
  return newArr;
};

const selectionSort = (arr) => {
  const start = Date.now();
  const newArr = [...arr];

  for (let i = 0; i < newArr.length - 1; i++) {
    let minIndx = i;

    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[j] < newArr[minIndx]) {
        minIndx = j;
      }
    }

    if (minIndx !== i) {
      const temp = newArr[i];
      newArr[i] = newArr[minIndx];
      newArr[minIndx] = temp;
    }
  }

  console.log(Date.now() - start);
  return newArr;
};

const insertionSort = (arr) => {
  const start = Date.now();
  const newArr = [...arr];

  for (let i = 1; i < newArr.length; i++) {
    let key = newArr[i];
    let j = i - 1;

    while (j >= 0 && newArr[j] > key) {
      newArr[j + 1] = newArr[j];
      j--;
    }

    newArr[j + 1] = key;
  }

  console.log(Date.now() - start);
  return newArr;
};

// const mergeSort = (arr) => {
//     const split = (arrToSplit) => {
//         const arr1 = [...arrToSplit.slice(0, Math.trunc(arrToSplit.length / 2) )];
//         const arr2 = [...arrToSplit.slice(Math.trunc(arrToSplit.length / 2))]
//         if (arrToSplit.length > 1) {

//             split(arr1)
//             split(arr2)
//         } else {
//            if (arr1 > arr2) return [...arr2, ...arr1]
//             return [...arr1, ...arr2]
//         }
//     }

//     const x = []
//     x.push(split(arr))

//    return x
// }

const mySort = (arr) => {
  const myArr = [...arr];

  const sortedArr = [];

  const recFn = (arr) => {
    if (arr.length > 0) {
      const minValue = Math.min(...arr);
      sortedArr.push(...arr.splice(arr.indexOf(minValue), 1));
      recFn(arr);
    } else {
        return
    }
  };

  recFn(myArr)

  return sortedArr;
};

const nums = [5, 8, 3, 6, 2, 13, 4, 88, 69, 7];

// console.log(bubbleSort(nums));
// console.log(selectionSort(nums));
// console.log(insertionSort(nums));
// console.log(mergeSort(nums))
console.log(mySort(nums));
