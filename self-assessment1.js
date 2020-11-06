//Exercise 1 (strings)
//Write a function getInitials which accepts a first name and a last name
//(two string arguments) and returns the first letter of each. (Hint: always
//check sample function call(s) for precise output expectation(s)).

function getInitials (firstName, lastName) {
  return (`${firstName[0]}.${lastName[0]}`);
}

console.log(getInitials("John", "Doe"));

// Exercise 2 (arrays, strings)
// Write a function minAndMax which accepts an array of ordered numbers, and
// returns a string with the first number and last number from the array
// (see sample function call below for precise string output expectation).
function minAndMax(numbers) {
  var min = JSON.stringify(numbers[0]);
  var max = JSON.stringify(numbers[numbers.length-1]);
  return `Min is ${min}. Max is ${max}`;
}

console.log(minAndMax([10, 11, 22, 39, 98, 10001])); //"Min is 10. Max is 10001"

// Exercise 3 (numbers, conditionals)
// Write a function isEven which returns true if a number is divisible by 2 (even),
// and false if it is not divisible by 2 (odd).
function isEven (number) {
  //your code here
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }

}
console.log(isEven(109)); //false
console.log(isEven(50112)); //true

// Exercise 4 (strings, objects)
// Write a function introduceFriend which takes in an object, and returns a string
// with a proper introduction of the person with their name and occupation.
// You can assume that the input object will always have at least the name and
// occupation properties.

function introduceFriend (friendObj) {
  //your code here
  return `This is my friend ${friendObj.name}. Their title is ${friendObj.occupation}`;
}

console.log(introduceFriend( {name: "Ana", occupation: "Engineering Product Manager"} ));
//"This is my friend Ana. Their title is Engineering Product Manager"

// Exercise 5 (conditionals and comparison operators)
// Write a function spiceThreshold which accepts an integer (number) between 0 to 10,
// and returns a string based on the following criteria:

// if the input is 0, return "No spice!"
// if the input is greater than 0 but less than or equal to 3, return "Mild!"
// if the input is greater than 3 but less than or equal to 7, return "Medium!"
// if the input is greater than 7 but less than or equal to 10, return "Hot!"

function spiceThreshold (integer) {
  //your code here
  if (integer > 0 && integer <= 3) {
    return 'Mild';
  } else if (integer > 3 && integer <= 7) {
    return 'Medium';
  } else if (integer > 7 && integer <= 10) {
    return 'Hot';
  } else {
    return 'No spice';
  }
}

console.log(spiceThreshold(3)); //"Mild!"
console.log(spiceThreshold(4)); //"Medium!"
console.log(spiceThreshold(9)); //"Hot!"
console.log(spiceThreshold(0)); //"No spice!"

// Exercise 6 (objects)
// Write a function idealTimes which returns an object with these 3 exact properties
// describing your favorite times of the year:
//
// dayOfTheWeek
// monthOfTheYear
// seasonOfTheYear
// The values of these objects are up to you (they'll likely be strings), but they
// should have values not undefined.
function idealTimes () {
  //notice the function didn't specify any input arguments; this function doesn't need one.
  var obj = {
    dayOfTheWeek:'Friday',
    monthOfTheYear: 'March',
    seasonOfTheYear: 'Summer'
  };
  return obj;
}

console.log(idealTimes());

// Exercise 7 (strings, conditionals)
// Write a function isThisAVowel which accepts a lower-cased letter (string),
// and returns true if the input is a vowel (the letters a, e, i, o, u are all vowels*).
// Your function should return false otherwise.
//
// * - no we're not arguing about whether or not "y" is a vowel today. :-)

function isThisAVowel (letter) {
  //your code here
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    return true;
  } else {
    return 'false';
  }
}

console.log(isThisAVowel('a')); //true
console.log(isThisAVowel('b')); //false
console.log(isThisAVowel(10)); //false

// Exercise 8 (arrays, loops)
// Write a function countOccurences which takes in an array and a number,
// and returns the number of elements which match that number

function countOccurences (collection, number) {
  //your code here
  var count = 0;
  for (var i=0; i < collection.length; i++) {
    if (collection[i] === number) {
      count++;
    }
  } return count;
}
//
// //this function call returns 3, since there are 3 occurences of the 2nd
// //argument (the number 5).
console.log(countOccurences([15, 20, 1, 5, 6, 90, 7, 35, 10, 5, 11, 5], 5)); //3

// Exercise 9 (conditionals, objects)
// Write a function lowBatteryNotification which takes in an object with a
// batteryPercentage property. If this property is less than or equal to 25, your
// function should return "Low Power. Charge Soon!", otherwise, your function returns null.

function lowBatteryNotification (phoneInfo) {
  //your code here
  if (phoneInfo.batteryPercentage <= 25) {
    return 'Low Power. Charge Soon!';
  } else {
    return null;
  }
}

var samplePhoneA = {
  model: "jPhone 9S",
  storageInGigabytes: 128,
  batteryPercentage: 94
};

var samplePhoneB = {
  model: "jPhone 10",
  storageInGigabytes: 64,
  batteryPercentage: 19
};


console.log(lowBatteryNotification(samplePhoneA)); //null
console.log(lowBatteryNotification(samplePhoneB)); //"Low Power. Charge Soon!"

// Exercise 10 (arrays, strings)
// Write a function blackJackResponse which takes in an array of numbers and returns
// the total sum of the values in the array.
//
// If the sum of all the numbers:
//
// is 21 or under, your function should return "Player stays with (sum)".
// is 22 or over, your function should return "Player busts with (sum)".

function blackJackResponses(cardValues) {
  //you can assume that you will receive an array of only positive integers.
  var sum = 0;
  for (var i = 0; i < cardValues.length; i++) {
    sum+=cardValues[i];
  } if (sum <= 21) {
    return `Player stays with ${sum}`;
  } else {
    return `Player busts with ${sum}`;
  }
}

console.log(blackJackResponses([10, 11, 5])); //"Player busts with 26"
console.log(blackJackResponses([11, 10, 9, 8, 7])); //"Player busts with 45"
console.log(blackJackResponses([4, 5, 2, 3, 1, 5])); //"Player stays with 20"
console.log(blackJackResponses([10, 11])); //"Player stays with 21"

// Additional Exercises
// Exercise 1
// Write a function hasAllNumbers which expects an array, and returns true if all
// the elements in the array are numbers, and false if there is at least 1 element
// that is not a number.
//
// Hint: You may have to use typeof (never heard of it? Check it out here)

function hasAllNumbers (array) {
  //your code here
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      count++;
    }
  } if (count < 1) {
    return true;
  } else {
    return false;
  }
}


console.log(hasAllNumbers([10, 100, 1000, 10000])); //true
console.log(hasAllNumbers([10, 100, 1000, "surprise!", 10000])); //false
