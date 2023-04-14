function invariant(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
}

function assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }
  
function calculateAwardPoints(totalTransaction, pointRate) {
    //invariant to ensure the totaltransaction is non-negative number and point rate between 0&1 is always true
        invariant(typeof totalTransaction === 'number' && totalTransaction >= 0, 'Total transaction must be a non-negative number!');
        invariant(pointRate > 0 && pointRate <= 1, 'Point rate must be a number between 0 and 1!');
    //assert to check if the totaltransaction and poinrate is a number   
        assert(!Number.isNaN(totalTransaction), 'Total transaction must be a number!');
        assert(!Number.isNaN(pointRate), 'Point rate must be a number!');
      
        const awardPoints = totalTransaction * pointRate;
        return awardPoints;
      }


console.log(calculateAwardPoints(100,0.5))
console.log(calculateAwardPoints(-100,0.5))
console.log(calculateAwardPoints(100,2))
console.log(calculateAwardPoints("ABC","DEF"))