let word = "arara";

console.log(verificaPalindrome(word));
function verificaPalindrome(word) {
    let isPalindrome = true;
    for(let i = 0 ; i <= ( word.length -1 ) / 2 ; i++ ){
        if (word[i] != word[word.length-1-i]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}