
function produceDrivingRange(blockRange) {
   return function (startingBlock, endingBlock) {

     let start = parseInt(startingBlock);
     let end = parseInt(endingBlock);
     let distanceToTravel = Math.abs(end - start);
     let difference = blockRange - distanceToTravel;

     if (difference > 0) {
       return `within range by ${difference}`
     } else {
       return `${Math.abs(difference)} blocks out of range`
     }
   }
 }


 function produceTipCalculator(percentage) {
  return function (rideFare) {
    return rideFare * percentage;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}








// describe('closures', function() {
//   describe('produceDrivingRange', function(){
//     it('returns a function', function(){
//       expect(typeof produceDrivingRange()).to.equal('function')
//     })

//     it('takes an argument of blockRange which is then used to calculate if something is within range', function(){
//       let eightBlockRange = produceDrivingRange(8)
//       expect(eightBlockRange('10th', '20th')).to.equal('2 blocks out of range')
//       expect(eightBlockRange('10th', '14th')).to.equal('within range by 4')
//     })

//     it('returns when something is out of range', function(){
//       let twentyBlockRange = produceDrivingRange(20)
//       expect(twentyBlockRange('10th', '20th')).to.equal('within range by 10')
//       expect(twentyBlockRange('10th', '40th')).to.equal('10 blocks out of range')
//     })
//   })
