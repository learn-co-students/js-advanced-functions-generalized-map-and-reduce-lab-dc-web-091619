// Add your functions here
function map(array, func) {
    let mapArray = []

    for (let i = 0; i < array.length; i++) {
        mapArray.push(func(array[i]))
    }
    return mapArray
}

function reduce(array, func, starting){
    let r = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < array.length; i++) {
      r = func(array[i], r)
    }
  
    return r;
  }