var marks = prompt("Enter a Marks for 1st condition :")

// Using if-else statement
if (marks <= 0) {
    document.write("Marks is Invalid");
}
else if (marks > 100) {
    document.write("Marks is Invalid");
}
else if (marks >= 80) {
    document.write("You got : " + "A+");
}
else if (marks >= 70) {
    document.write("You got : " + "A");
}
else if (marks >= 60) {
    document.write("You got : " + "A-");
}
else if (marks >= 50) {
    document.write("You got : " + "B");
}
else if (marks >= 40) {
    document.write("You got : " + "C");
}
else if (marks >= 33) {
    document.write("You got : " + "D");
}
else {
    document.write("You are : " + "Fail");
}