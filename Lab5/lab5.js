/*
console.log('Hello');
console.log('Hello world!');

window.alert('hello world!');
*/

function askName(){
    let userName = prompt("Please enter your name:");
    
    if (userName != null && userName.trim() !== "") 
        document.getElementById("nameDisplay").textContent = userName;
}

