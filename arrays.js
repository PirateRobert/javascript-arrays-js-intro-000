var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array,element){
  var newarray = array.unshift(element)
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element){
  var newarray = array.push(element)
  return newarray
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
