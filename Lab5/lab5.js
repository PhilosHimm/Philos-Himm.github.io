/*
Test
console.log('Hello');
console.log('Hello world!');

window.alert('hello world!');
*/

// Function to get name and input onto page (replaces the word Guest)
function askName(){
    let userName = prompt("Please enter your name:");
    
    if (userName != null && userName.trim() !== "") 
        document.getElementById("nameDisplay").textContent = userName;
}

// Function to increase image size when clicked
img = document.getElementById("img1");
function enlargeImg() {
    img.style.transform = "scale(2)";
}