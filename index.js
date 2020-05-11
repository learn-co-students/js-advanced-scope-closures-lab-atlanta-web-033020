const produceDrivingRange = function (range) {
  return function (start, end) {
    const distance = Math.abs(parseInt(start) - parseInt(end));
    if (range - distance > 0) {
      return `within range by ${range - distance}`
    } else {
      return `${distance - range} blocks out of range`
    }
  }
}

const produceTipCalculator = function (tip) {
  return function (amount) {
    return tip * amount;
  }
}

const createDriver = function () {
  let id = 0;
  return class {
    constructor(name) {
      id++;
      this.id = id;
      this.name = name;
    }
  }
}