// Add your functions here

function map(array,callbackFunction){
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        newArray.push(callbackFunction(array[i]));
    }

    return newArray;
}

function reduce(array,callbackFunction,starting){
  let r = (!!starting) ? starting : array[0]
  let i = (!!starting) ? 0 : 1

  for (; i < array.length; i++) {
    r = callbackFunction(array[i], r)
  }

  return r;
}