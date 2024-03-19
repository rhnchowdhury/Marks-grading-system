var marks = prompt("Enter a Marks for 2nd condition : ")

// Using logical operators
if (marks > 100 || marks <= 0) {
    document.write("</br>Marks is Invalid");
}
else if (marks >= 80 && marks <= 100) {
    document.write("</br>You got : " + "A+");
}
else if (marks >= 70 && marks <= 79) {
    document.write("</br> You got : " + "A");
}
else if (marks >= 60 && marks <= 69) {
    document.write("</br> You got : " + "A-");
}
else if (marks >= 50 && marks <= 59) {
    document.write("</br> You got : " + "B");
}
else if (marks >= 40 && marks <= 49) {
    document.write("</br> You got : " + "C");
}
else if (marks >= 33 && marks <= 39) {
    document.write("</br> You got : " + "D");
}
else {
    document.write("</br> You are : " + "Fail");
}