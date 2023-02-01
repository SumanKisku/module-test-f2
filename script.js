const firstImg = document.getElementById("first-image");
const secondImg = document.getElementById("second-image");
const thirdImg = document.getElementById("third-image");
const fourthImg = document.getElementById("fourth-image");
let registered = false;
let secondClicked = false;
let rollWon = false;
let fourthClicked = false;

const form = document.getElementById("form");
const register = document.getElementById("register");
const formMsg = document.querySelector(".form-message");


let user = {};

const userdetails = document.getElementById("user-details");
const displayName = document.getElementById("display-name");
const displayUserName = document.getElementById("display-username");

const diceContainer = document.querySelector(".dice");
const dice = document.getElementById("dice")

const generated = document.getElementById("generated");
const totalContainer = document.getElementById("total");
const attemptCount = document.getElementById("attempt-count");
const tryAgain = document.getElementById("try-again");

const couponContainer = document.getElementById("coupon-container");
const congrats = document.getElementById("congrats");


firstImg.addEventListener("click", ()=> {
    form.style.display = "block";
});

register.addEventListener("click", (e)=> {
    firstClicked = true;
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let userName = document.getElementById("username").value;
    user.name = name;
    user.email = email;
    user.username = userName;
    console.log(user);
    formMsg.style.display = "block";
    registered = true;
    setTimeout(()=> {
        formMsg.style.display = "none";
    }, 500)
})

secondImg.addEventListener("click", ()=> {
    if(registered) {
    displayName.innerText = `Name -> ${user.name}`;
    displayUserName.innerText = `Username -> ${user.username}`;
    secondClicked = true;
    }
})

thirdImg.addEventListener("click", ()=> {
    if(secondClicked) {
    diceContainer.style.display = "block"
    }
})

let total = 0;
totalContainer.innerText = total;
let turn = 3;
attemptCount.innerText = turn;


dice.addEventListener("click", ()=> {
    if(turn > 0 && total < 10) {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    generated.innerText = `${randomNumber}`;
    total += randomNumber;
    totalContainer.innerText = `${total}`;
    turn--;
    attemptCount.innerText = turn;
    }
    if(turn === 0 && total < 10) {
        tryAgain.style.display = "block";
    }
    if(total >= 10) {
        couponContainer.style.display = "flex";
        rollWon = true;
    }
})

tryAgain.addEventListener("click", ()=> {
    total = 0;
    turn = 3;
    totalContainer.innerText = total;
    attemptCount.innerText = turn;
    generated.innerText = 0;
    tryAgain.style.display = "none";
})

fourthImg.addEventListener("click", ()=> {
    if(rollWon && !fourthClicked) {
    let text = generateText();
    couponContainer.innerText = `Your coupon code is ${text}`;
    congrats.style.display = "block";
    fourthClicked = true;
    }
})


function generateText() {
    let text = '';
    const possible = '0123456789';
    
    for (let i = 0; i < 12; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
    return text;
  }