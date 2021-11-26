function myMap(array, func) {
  const mapped = [];
  
  array.forEach(elem => {
    mapped.push(func(elem));
  });
  
  return mapped;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]
