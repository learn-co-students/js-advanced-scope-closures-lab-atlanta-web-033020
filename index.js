const produceDrivingRange = function (range) {
  return function (start, end) {
    distance = Math.abs(parseInt(start) - parseInt(end));
    if (distance <= range) {
      return `within range by ${range - distance}`;
    } else {
      return `${distance - range} blocks out of range`;
    }
  };
};

const produceTipCalculator = function (tip) {
  return function (fare) {
    return tip * fare;
  };
};

const createDriver = function (name) {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  };
};