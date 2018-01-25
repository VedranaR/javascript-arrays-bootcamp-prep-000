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
function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}
function removeElementFromBeginningOfArray(arr){
  var newArr = arr.slice(1,1);
  return newArr;
}
function destructivelyRemoveElementFromEndOfArray(){
  return arr.pop();
}
function removeElementFromEndOfArray(arr){
  var newArr = arr.slice(arr.length- 1, 1);
  return newArr;
}