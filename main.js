 /* ComputerPlay() get the pc choose */

userChoose = "";
round = 0;
buttonPress = false;
gameOver = false;
draw = 0;
win = 0;
lose = 0;
computerPlay = () => {
    let choose = Math.floor(Math.random() * 3);
    let options = ['Rock', 'Paper', 'Scissors'];
    return value = options[choose];
}

rock = document.querySelector('#rock');
paper = document.querySelector('#paper');
scissors = document.querySelector('#scissors');
rockPc = document.querySelector("#rock_pc");
paperPc = document.querySelector("#paper_pc");
scissorsPc = document.querySelector("#scissors_pc");
roundText = document.querySelector("#round");
game = document.querySelector("#game");
match = document.querySelector("#match");
reset = document.querySelector("#reset");

play = () => {
    rockPc.classList.remove('btn_pc-active');
    paperPc.classList.remove('btn_pc-active');
    scissorsPc.classList.remove('btn_pc-active');
   if(!gameOver){
    let number = Math.floor(Math.random() * 3);
    let options = ['Rock', 'Paper', 'Scissors'];
    let value = options[number];
    pc = value.toLowerCase();

    
    if(pc == 'rock'){
        rockPc.classList.add('btn_pc-active');
    }
    if(pc == 'paper'){
        paperPc.classList.add('btn_pc-active');
    }
    if(pc == 'scissors'){
        scissorsPc.classList.add('btn_pc-active');
    }

    user = userChoose.toLowerCase();
    if(pc == user)
    {
        draw = draw + 1;
        game.innerText = "DRAW";
    }
    if(user == 'rock' && pc == 'paper')
    {
        lose = lose + 1;
        game.innerText = "LOSE";
    }
    if(user == 'rock' && pc == 'scissors')
    {
        win = win + 1;
        game.innerText = "WIN";
    }
    if(user == 'paper' && pc == 'scissors')
    {
        lose = lose + 1;
        game.innerText = "LOSE";
    }
    if(user == 'paper' && pc == 'rock'){
        win = win + 1;
        game.innerText = "WIN";
    }
    if(user == 'scissors' && pc == 'rock'){
        lose = lose + 1;
        game.innerText = "LOSE";
    }
    if(user == 'scissors' && pc == 'paper'){
        win = win + 1;
        game.innerText = "WIN";
    }
    round = round + 1;
    if(round == 5){
        gameOver = true;
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        result = win > lose ? "You Win" : draw > win && draw > lose ? "Draw" : "You Lose";
        match.innerText = result;

    }
    roundText.innerText = round;
   }
}

reset.addEventListener('click', () => {
    roundText.innerText = 0;
    round = 0;
    draw = 0;
    win = 0;
    lose = 0;
    rockPc.classList.remove('btn_pc-active');
    paperPc.classList.remove('btn_pc-active');
    scissorsPc.classList.remove('btn_pc-active');
    game.innerText = "";
    match.innerText = "";
    gameOver = false;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
})


choose = (buttonPlay) =>{
    userChoose = buttonPlay;
    play();
}


