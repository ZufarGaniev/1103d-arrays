// задача №1
const fill = (arraySize, value) => {
  const newArray = [];
  for (let i = 0; i < arraySize; i++) {
    newArray.push(value);
  }
  return newArray;
}

const data1 = 3;
const valueToFill = 'a';
console.log(fill(data1, valueToFill))

// задача №2
const reverse = (array) => {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

const data2 = [1, 2, 3];
console.log(reverse(data2)); // [3, 2, 1]

// задача №3
const compact = (array) => {
  let cleanArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i])
      cleanArray.push(array[i]);
  }
  return cleanArray;
}

const data3 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data3)) // [1, 2, 3]
