// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
//no close bracket on the strings listed below and no semicolon (1,2)
    let skills = ['Web Development','Gardening','Drumming','Volunteering'];
    let output = "<h2>Bruce's Skills<h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
//no equal operand to set bruce to the variable firstname and no semi colon after bruce. (3,4)
    let firstName = 'Bruce';
    let lastName = 'Elgort';
//no semicolon after clark college    (5)
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
//needed a $ before the seagull on lastName (7) and in fornt of city (8)and gpa(9)
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;
// different quotation marks around the closing </p> (6)
    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}