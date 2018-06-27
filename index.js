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
  if (paidDistance < 400 || paidDistance === 0) {
    return 0
  } else if (paidDistance > 400) {
    if (paidDistance >= 2000 && paidDistance <= 2500) {
      return 25;
    } else if (paidDistance > 2500) {
      return 'cannot travel that far';
    }
  }
}
