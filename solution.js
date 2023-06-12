function checkPalindrome(text) {
  const formattedText = text.replace(/\s/g, "").toLowerCase();
  const length = formattedText.length;

  for (let i = 0; i < length / 2; i++) {
    if (formattedText[i] !== formattedText[length - i - 1]) {
      return false;
    }
  }
  
  return true;
}

const input = prompt("Enter a word or phrase:");
const isPalindrome = checkPalindrome(input);

if (isPalindrome) {
  console.log("It is a palindrome!");
} else {
  console.log("It is not a palindrome!");
}