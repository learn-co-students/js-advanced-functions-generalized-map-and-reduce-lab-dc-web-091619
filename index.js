function map(array, callback){
  let newArray = []
  for (let i=0; i<array.length; i++){
    newArray.push( callback(array[i]) )
  }
  return newArray
}

function reduce(array, callback, start){
  // if `start` is present, set result to `start`; otherwise set it to the first value in the source array
  let result = (!!start) ? start : array[0] 

  // if `start` is provided, set `i` equal to 0; if `start` is not provided, set `i` equal to the second element in the array, becuase the first element is set as the `result`
  let i = (!!start) ? 0 : 1 

  for (; i<array.length; i++){
    result = callback(array[i], result)
  }

  return result
}