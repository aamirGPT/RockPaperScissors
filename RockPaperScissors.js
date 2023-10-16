//const prompt = require("prompt-sync")({ sigint: true });

//! Creating a ROCK, PAPER, SCISSORS game in JavaScript using BOM.

let array = ["ROCK", "PAPER", "SCISSORS"];
let flag = true;
let player = 0;
let computer = 0;
while (flag) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    let input = prompt("Rock or Paper or Scissors").toUpperCase();
    switch (input) {
        case "ROCK":
            if (randomElement == "PAPER") {
                alert(`Computer draws: ${randomElement}!, Computer +1`);
                computer += 1;
            } else if (randomElement == "SCISSORS") {
                alert(`Computer draws: ${randomElement}!, Player +1`);
                player += 1;
            } else {
                alert(`Computer draws: ${randomElement}! as well`);
            }
            break;
        case "PAPER":
            if (randomElement == "ROCK") {
                alert(`Computer draws: ${randomElement}!, Player +1`);
                player += 1;
            } else if (randomElement == "SCISSORS") {
                alert(`Computer draws: ${randomElement}!, Computer +1`);
                computer += 1;
            } else {
                alert(`Computer draws: ${randomElement}! as well`);
            }
            break;
        case "SCISSORS":
            if (randomElement == "PAPER") {
                alert(`Computer draws: ${randomElement}!, Player +1`);
                player += 1;
            } else if (randomElement == "ROCK") {
                alert(`Computer draws: ${randomElement}!, Computer +1`);
                computer += 1;
            } else {
                alert(`Computer draws: ${randomElement}! as well`);
            }
            break;
        default:
            alert("Enter a valid draw");
            break;
    }
    flag = confirm("Would you like to continue?");
}
alert(
    player > computer
        ? `Congratulations! You win by score ${player} -- ${computer}`
        : `Nice Try! Unfortunately you lose by score ${computer} -- ${player}`
);
