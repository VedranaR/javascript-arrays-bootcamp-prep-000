var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, x){
  var newArr = [x,...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, x){
  return arr.unshift(x);
}

function addElementToEndOfArray(){
  var newArr = [arr, ...x];
  return newArr;
}

function destructivelyAddElementToEndOfArray(){
    return arr.push(x);
}
