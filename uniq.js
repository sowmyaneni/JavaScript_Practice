// function outerFunction () {
//   const outer = `I see the outer variable!`
//
//   function innerFunction() {
//     console.log(outer)
//   }
//
//   return innerFunction
// }
//
//
//
// console.log(outer) // undefined
// innerFunction() // innerFunction is not a function.. undefined
// console.log(outerFunction()) // f() ...
// console.log(outerFunction()()) //

//uniq underbar function

var iterator = function(value) { return value === 1; };
var numbers = [1, 2, 2, 3, 4, 4];


expect(_.uniq(numbers,true,iterator)).to.eql([1, 2]);
});


_.uniq = function(array, isSorted, iterator) {
  var result = [];
  if (iterator === undefined) {
    for (var i = 0; i < array.length; i++) {
      if (_.indexOf(result, array[i]) === -1) {
        result.push(array[i]);
      }
    }
  } else {
    var tempResult = [];
    for (var i = 0; i < array.length; i++) {
      var iteratorResult = iterator(array[i]);
      if (_.indexOf(tempResult, iteratorResult) === -1) {
        tempResult.push(iteratorResult);
        result.push(array[i]);
      }
    }

  }
  return result;
}
