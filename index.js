// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  let result;
  result = 42 - value;
  if (Math.sign(result) === -1) {
    result = -result;
  }
  return result;
}

function distanceFromHqInFeet(value) {
  let result;
  result = distanceFromHqInBlocks(value) * 264;
  return result;
}
