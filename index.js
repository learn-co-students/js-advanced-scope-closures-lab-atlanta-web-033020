function produceDrivingRange(blockRange){
    return function (a,b){
        let start = parseInt(a);
        let end = parseInt(b);
        let distance = Math.abs(end - start);
        let blocks = blockRange - distance;
        if (blocks > 0) {
            return `within range by ${blocks}`
        } else {
            return `${Math.abs(blocks)} blocks out of range`
        }
    }
}

function produceTipCalculator(rate){
    return function (fare){
        return rate * fare;
    }
}

function createDriver(){
    let DriverId = 0;
    return class {
        constructor(name) {
          this.name = name;
          this.id = ++DriverId;
        }
    };
}