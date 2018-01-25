var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, x){
  var newArr = [x,...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, x){
  return arr.unshift(x);
}

function addElementToEndOfArray(arr, x){
  var newArr = [arr, ...x];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, x){
    return arr.push(x);
}
function accessElementInArray(arr, y){
  return arr[y];
}