function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
  var word = word.split('');
  var obj = {};
  for (var i = 0; i < word.length; i++) {
    obj[word[i]] = (obj[word[i]] || 0) + 1;
  }
  var arr = Object.values(obj);
  var max = Math.max(...arr);
  return max;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var word = text.split(' ');
  // For each word...
    for (var i = 0; i < word.length; i++) {

      var repeatCountForWord = findMaxRepeatCountInWord(word[i]);
      //  If that max repeat count is higher than the overall max repeat count, then
      if (repeatCountForWord > maxRepeatCountOverall) {
      //    update maxRepeatCountOverall
        maxRepeatCountOverall = repeatCountForWord;
        wordWithMaxRepeatCount = word[i];
      }
    }

  return wordWithMaxRepeatCount;
}

var input = 'foo bar bazz';
console.log(findFirstWordWithMostRepeatedChars(input));
