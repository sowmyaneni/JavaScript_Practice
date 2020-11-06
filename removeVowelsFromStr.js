// Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

// Example 1:

// Input: "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"
// Example 2:

// Input: "aeiou"
// Output: ""

function removeVowelsFromStr(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            str.slice(i);
        }
    }
}

console.log(removeVowelsFromStr("leetcodeisacommunityforcoders"));
