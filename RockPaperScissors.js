//const prompt = require("prompt-sync")({ sigint: true });

//! Creating a rock, paper, scissors game in JavaScript using BOM.

let array = ["Rock", "Paper", "Scissors"];
let flag = true;
let player = 0;
let computer = 0;
while (flag) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    let input = prompt("Rock or Paper or Scissors");
    switch (input) {
        case "Rock":
            if (randomElement == "Paper") {
                alert(`Computer draws: ${randomElement}, Computer +1`);
                computer += 1;
            } else if (randomElement == "Scissors") {
                alert(`Computer draws: ${randomElement}, Player +1`);
                player += 1;
            } else {
            }
            break;
        case "Paper":
            if (randomElement == "Rock") {
                alert(`Computer draws: ${randomElement}, Player +1`);
                player += 1;
            } else if (randomElement == "Scissors") {
                alert(`Computer draws: ${randomElement}, Computer +1`);
                computer += 1;
            } else {
            }
            break;
        case "Scissors":
            if (randomElement == "Paper") {
                alert(`Computer draws: ${randomElement}, Player +1`);
                player += 1;
            } else if (randomElement == "Rock") {
                alert(`Computer draws: ${randomElement}, Computer +1`);
                computer += 1;
            } else {
            }
            break;
        default:
            console.error("Invalid input, try again.");
            break;
    }
    flag = confirm("Would you like to continue?");
}
alert(
    player > computer
        ? `Congratulations! You win by score ${player} -- ${computer}`
        : `Nice Try! Unfortunately you lose by score ${computer} -- ${player}`
);