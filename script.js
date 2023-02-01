const firstImg = document.getElementById("first-image");
const secondImg = document.getElementById("second-image");
const thirdImg = document.getElementById("third-image");
const fourthImg = document.getElementById("fourth-image");
const register = document.getElementById("register");

const form = document.getElementById("form");

const userdetails = document.getElementById("user-details");
const displayName = document.getElementById("display-name");
const displayUserName = document.getElementById("display-username");


let user = {};

firstImg.addEventListener("click", ()=> {
    form.style.display = "block";
});

register.addEventListener("click", (e)=> {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let userName = document.getElementById("username").value;
    user.name = name;
    user.email = email;
    user.username = userName;
    console.log(user);
})

secondImg.addEventListener("click", ()=> {
    displayName.innerText = `Name -> ${user.name}`;
    displayUserName.innerText = `Username -> ${user.username}`;
})