var someWord = prompt("Please enter something, anything!");

if (someWord.length !=0) {
    var length = someWord.length;
    alert("You said '" + someWord + "'. The length is: " + length + " Nice job!");
} else {
    alert("Why did not listen to me and enter something!");
}