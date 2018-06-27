// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  let result = 42 - value;
  if (Math.sign(result) === -1) {
    return -result;
  }
  return result;
}

function distanceFromHqInFeet(value) {
  let result = distanceFromHqInBlocks(value) * 264;
  return result;
}

function distanceTravelledInFeet(start, stop) {
  let result = (start - stop) * 264;
  if (Math.sign(result) === -1) {
    return -result;
  }
  return result;
}

function calculatesFarePrice(start, stop) {
  let result;
  let feet = distanceTravelledInFeet(start, stop);
  paidDistance = 400 - feet;
  alert(Math.sign(paidDistance));
  if (Math.sign(paidDistance) === -1 || Math.sign(paidDistance) === 0) {

  }
}
