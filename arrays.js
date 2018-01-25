var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var x = "hah";

function addElementToBeginningOfArray(chocolateBars, x){
  var newArr = [x,...chocolateBars];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  return chocolateBars.unshift(x);
}

function addElementToEndOfArray(chocolateBars, x){
  var newArr = [chocolateBars, ...x];
  return newArr;
}

function destructivelyAddElementToEndOfArray(chocolateBars, x){
    return chocolateBars.push(x);
}
function accessElementInArray(chocolateBars, y){
  return chocolateBars[y];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift();
}
function removeElementFromBeginningOfArray(chocolateBars){
  var newArr = chocolateBars.slice(1,1);
  return newArr;
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return arr.pop();
}
function removeElementFromEndOfArray(chocolateBars){
  var newArr = chocolateBars.slice(chocolateBars.length- 1, 1);
  return newArr;
}