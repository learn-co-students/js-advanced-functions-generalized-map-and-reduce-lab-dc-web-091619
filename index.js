// Add your functions here
function map(array, method){
  let newArray = []
  array.forEach(element => {
      newArray.push(method(element))
  });

  return newArray
}

function reduce(array, method, startingValue){
    let r = (!!startingValue) ? startingValue : array[0]    //if starting value is false then it will be the whatever is passed in or it will be the 1st value in the array
    let i = (!!startingValue) ? 0 : 1   //if starting value is false then it will be 0 or else it will be 1 

    for (; i < array.length; i++) {
        r = method(array[i], r)
    }

    return r
}