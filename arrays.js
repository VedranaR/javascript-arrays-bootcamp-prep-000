var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, x){
  var newArr = [x,...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, x){
  return arr.unshift(x);
}

function addElementToEndOfArray(){
  
}

function 