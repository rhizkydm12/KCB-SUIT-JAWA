// HTML WRITING VARIABLES
var userText = document.getElementById("user");
var computerText = document.getElementById("computer");
var result = document.getElementById("result");
var userScore = document.getElementById("userScore");
var computerScore = document.getElementById("computerScore");
var html_user_image = document.getElementById("user_image");
var html_cpu_image = document.getElementById("cpu_image");
var num_games = document.getElementById("games");

// SET THE USER AND COMPUTER VARIABLES      
var computerChoices = ["g", "s", "m"];
var userScore_count = 0;
var computerScore_count = 0;
var num_games_count = 0;
var userGuess;
var computerGuess = function() {return computerChoices[Math.floor(Math.random() * computerChoices.length)];}
var computerReturn = function(play) {
    var text;
    switch (play) {
        case "g":
            text = "GAJAH"
            html_cpu_image.src = "img/gajah.png"
            break;
        case "s":
            text = "SEMUT"
            html_cpu_image.src = "img/semut.png"
            break;
        case "m":
            text = "MANUSIA"
            html_cpu_image.src = "img/manusia.png"
            break;
    }
    return text;
}

const win = ()=>{
    result.textContent = "WIN";
    result.style = "color: rgb(99, 189, 187)";
}

const lose = ()=>{
    result.textContent = "YOU LOSE";
    result.style = "color: rgb(243, 102, 82)";
}

// USER PLAYS GAJAH

document.getElementById("GAJAH").onclick = function(){
    userGuess = "g";
    userText.textContent = "GAJAH";   
    html_user_image.src = "img/gajah.png"
    console.log(computerGuess());
    
    let play = computerGuess();
    computerText.textContent = computerReturn(play);

    return game(userGuess, play);
}

// USER PLAYS SEMUT

document.getElementById("SEMUT").onclick = function(){
    userGuess = "s";
    userText.textContent = "SEMUT";   
    html_user_image.src = "img/semut.png"
    console.log(computerGuess());
    
    let play = computerGuess();
    computerText.textContent = computerReturn(play);

    return game(userGuess, play);
}

// USER PLAYS MANUSIA

document.getElementById("MANUSIA").onclick = function(){
    userGuess = "m";
    userText.textContent = "MANUSIA";   
    html_user_image.src = "img/manusia.png"
    console.log(computerGuess());
    
    let play = computerGuess();
    computerText.textContent = computerReturn(play);

    return game(userGuess, play);
}

// THIS FUNCTION RUNS THE GAME CONDITIONS

let game = function(user, computer) {
    num_games_count++;
    num_games.textContent = num_games_count;

    if (user == computer) {
        result.textContent = "Tie!";
        result.style = "color: rgb(245, 188, 74)";
    } else if (user == "g") {
        if (computer == "m") {
            userScore_count = userScore_count + 1;
            console.log(userScore_count);
            win();
        } else if (computer == "s") {
            computerScore_count = computerScore_count + 1;
            lose();
        }
    } else if (user == "s") {
        if (computer == "g") {
            userScore_count = userScore_count + 1;
            console.log(userScore_count);
            win();
        } else if (computer == "m") {
            computerScore_count = computerScore_count + 1;
            lose();
        }
    } else if (user == "m") {
        if (computer == "s") {
            userScore_count = userScore_count + 1;
            console.log(userScore_count);
            win();
        } else if (computer == "g") {
            computerScore_count = computerScore_count + 1;
            lose();
        }
    }
    userScore.textContent = userScore_count;
    computerScore.textContent = computerScore_count;
}
