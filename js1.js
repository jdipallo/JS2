var someWord = prompt("Please enter something, anything!");

if (someWord.length !=0) {
    var length = someWord.length;
    var thirdChar = someWord.charAt(2);
    var lowerCase = someWord.toLowerCase();
    var upperCase = someWord.toUpperCase();
    var useTheWord = "I love " + someWord + "'s guitar playing";
    var TwoThroughFour = someWord.substr(1, 3);

    alert("You said " + someWord + "\nThe length is: " + length +"\nThe 3rd character is: " 
            + thirdChar + "\nLowerCase: " + lowerCase + "\nUpperCase: " + upperCase + "\n" + useTheWord + "\nLetters 2-4 = " + TwoThroughFour);
} else {
    alert("Why did not listen to me and enter something!");
}