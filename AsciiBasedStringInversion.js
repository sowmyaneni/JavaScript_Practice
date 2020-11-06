// You've caught two of your fellow minions passing coded notes back and forth - while they're on duty,
//  no less! Worse, you're pretty sure it's not job-related - they're both huge fans of the space soap opera ""
//  Lance & Janice"". You know how much Commander Lambda hates waste, so if you can prove that these minions 
//  are wasting her time passing non-job-related notes, it'll put you that much closer to a promotion. 

// Fortunately for you, the minions aren't exactly advanced cryptographers. In their code, every lowercase
//  letter [a..z] is replaced with the corresponding one in [z..a], while every other character 
//  (including uppercase letters and punctuation) is left untouched.  That is, 'a' becomes 'z', 'b' becomes 
//  'y', 'c' becomes 'x', etc.  For instance, the word ""vmxibkgrlm"", when decoded, would become
//   ""encryption"".

// Write a function called solution(s) which takes in a string and returns the deciphered string so 
// you can show the commander proof that these minions are talking about ""Lance & Janice"" instead of 
// doing their jobs.

function solution(string) {
    let stringArray = string.split('');
    let encryptedArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        let code = stringArray[i].charCodeAt(0);
        let a_code = 'a'.charCodeAt(0);
        let z_code = 'z'.charCodeAt(0);
        if (code <= z_code && code >= a_code) {
            let new_code = z_code-code+a_code;
            encryptedArray.push(String.fromCharCode(new_code));
        } else {
            encryptedArray.push(stringArray[i]);
        }
    }
    return encryptedArray.join('');
    
}

console.log(solution("wrw blf hvv ozhg mrtsg'h vkrhlwv?"));
console.log(solution("Yvzs! I xzm'g yvorvev Lzmxv olhg srh qly zg gsv xlolmb!!"));