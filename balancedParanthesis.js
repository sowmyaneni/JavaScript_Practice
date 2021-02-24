// For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced 
// parentheses.
// Input: N=2
// Output: (()), ()()

// Input: N=3
// Output: ((())), (()()), (())(), ()(()), ()()()

function generate_valid_parantheses(num) {
    let result = [];
    
    function addBracket(str, openCount, closeCount) {
        if (openCount === num && closeCount === num) {
            result.push(str);
        } else {
            if (openCount < num) {
                addBracket(`${str}(`, openCount+1, closeCount);
            }
            if (closeCount < openCount) {
                addBracket(`${str})`, openCount, closeCount+1);
            }
        }
    }
    addBracket('', 0, 0);
    return result;
 }

console.log(generate_valid_parantheses(2));
console.log(generate_valid_parantheses(4));