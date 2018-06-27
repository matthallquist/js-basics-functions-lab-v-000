// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  let result;
  result = 42 - value;
  if (Math.sign(result) === -1) {
    result = value.slice(1);
  }
  return result;
}
