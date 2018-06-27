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
  let result = distanceTravelledInFeet(start, stop);
  paidDistance = 400 - result;
  if (paidDistance < 400) {

  } else if (paidDistance > 400) {
    return
  } else if (paidDistance === 0) {
    return 0
  }
}
