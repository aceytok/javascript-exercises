const palindromes = function (string) {
    let result = string.toLowerCase()
                    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]/g, "")
                    .replace(/\s/g, '')
    let reversed = result.split('')
                    .reverse()
                    .join('')
    return result === reversed;
};

let test = palindromes('racecar!')

console.log(test);
// Do not edit below this line
module.exports = palindromes;
