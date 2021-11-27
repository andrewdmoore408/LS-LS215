// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

function totalArea(arrOfRectangles) {
  const areas = arrOfRectangles.map(dimensions => dimensions[0] * dimensions[1]);

  const sumOfAreas = areas.reduce((total, currentArea) => total + currentArea);

  return sumOfAreas;
}

// Now, write a second Function named totalSquareArea.This Function should calculate the total area of a set of rectangles, just like totalArea.However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

console.log(totalSquareArea(rectangles));    // 121

function totalSquareArea(arrOfRectangles) {
  const onlySquares = arrOfRectangles.filter(rectangle => rectangle[0] === rectangle[1]);

  return totalArea(onlySquares);
}