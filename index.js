 function map(array, callback) {
  let newArray = [];
  for (let i=0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
 }

 
function reduce(array, callback, startingPoint) {
  let start;
  let i;
  if (startingPoint) { 
    start = startingPoint;
    i = 0;
  } else {
    start = array[0];
    i = 1;
  }
  for (i; i < array.length; i++) {
    start = callback(array[i], start)
  }
  return start;
 }