function myReduce(array, func, initial) {
  const [STARTING_INDEX_WITH_INITIAL, STARTING_INDEX_NO_INITIAL] = [0, 1];
  
  let memo;
  let startingIndex;
  
  if (initial === undefined) {
    memo = array[0];
    startingIndex = STARTING_INDEX_NO_INITIAL;
  } else {
    memo = initial;
    startingIndex = STARTING_INDEX_WITH_INITIAL;
  }
  
  for (let index = startingIndex; index < array.length; index += 1) {
    memo = func(memo, array[index]);
  }
  
  return memo;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
