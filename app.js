let uScore = 0;
let cScore = 0;

const choices = document.querySelectorAll(".btn");

const msg = document.querySelector(".msg");

const resetbtn = document.querySelector(".reset");

upoint = document.querySelector("#pscore");
cpoint = document.querySelector("#cscore");

const compChoice = () => {
    const options = ["Stone","Paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Draw";
    msg.style.color = "Black";
};

const showWinner = (userWin, choiceId, cChoice) => {
    if(userWin){
        console.log("You Win !");
        msg.innerText = `You Win!\nComputer Choice was ${cChoice} And Your Choice was ${choiceId}`;
        msg.style.color = "green";
        uScore++;
        upoint.innerText = uScore;
    }
    else{
        console.log("You Lose !");
        msg.innerText = `You Lose!\nComputer Choice was ${cChoice} And Your Choice was ${choiceId}`;
        msg.style.color = "#FF101F";
        cScore++;
        cpoint.innerText = cScore;
    }
};

const playGame = (choiceId) => {
    const cChoice = compChoice();
    console.log(cChoice);

    if(cChoice === choiceId){
        drawGame();
    }else{
        let userWin = true;
        if(choiceId === "Stone"){
            userWin = cChoice === "Paper" ? false : true;
        }else if(choiceId === "Paper"){
            userWin = cChoice === "Scissors" ? false : true;
        }else if(choiceId === "Scissors"){
            userWin = cChoice === "Stone" ? false : true;
        }
        showWinner(userWin, choiceId, cChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const choiceId = choice.getAttribute("id");
        console.log(choiceId);
        playGame(choiceId);
    })
});

resetbtn.addEventListener("click", ()=>{
    uScore = 0;
    cScore = 0;
    upoint.innerText = uScore;
    cpoint.innerText = cScore;
    msg.innerText = "";
});