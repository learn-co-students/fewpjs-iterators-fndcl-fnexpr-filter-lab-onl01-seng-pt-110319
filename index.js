// Code your solution here

function findMatching(arr, name){
  return arr.filter(el => el.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(arr, name){
  return arr.filter(el => el.charAt(0) === name.charAt(0))
}

function matchName(arr, name){
  return arr.filter(el => el.name === name)
}
