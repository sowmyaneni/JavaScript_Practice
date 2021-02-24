// Given a string, find all of its permutations preserving the character sequence but changing case.

// Example 1:

// Input: "ad52"
// Output: "ad52", "Ad52", "aD52", "AD52" 
// Example 2:

// Input: "ab7c"
// Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"

function find_letter_case_string_permutations (str) {
    let permutations = [];
    permutations.push(str);

    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i], 10))) {
            let n = permutations.length;
            for (let j = 0; j < n; j++) {
                let chs = permutations[j].split('');
                if (chs[i] === chs[i].toLowerCase()) {
                    chs[i] = chs[i].toUpperCase();
                } else {
                    chs[i] = chs[i].toLowerCase();
                }
                permutations.push(chs.join(''));
            }
        }
    }
    return permutations;
}

console.log(find_letter_case_string_permutations('ad52'));
console.log(find_letter_case_string_permutations('ab7c'));