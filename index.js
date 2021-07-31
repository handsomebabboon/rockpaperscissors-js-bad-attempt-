const buttons = document.getElementsByClassName("button");
const p_display = document.getElementById("p_display");
const CPU_display = document.getElementById("CPU_display");
const game_status = document.getElementsByClassName("status");
let reset_btn = document.getElementById("reset-btn");
let flag = 1;
function pick_option() {
  buttons[0].addEventListener("click", function () {
    playGame(0); //rock
    return;
  });

  buttons[1].addEventListener("click", function () {
    playGame(1); //paper
    return;
  });

  buttons[2].addEventListener("click", function () {
    playGame(2); //scissors
    return;
  });
}

function playGame(p_option) {
  if (flag) {
    switch (p_option) {
      case 0:
        p_display.innerHTML += "rock";
        break;
      case 1:
        p_display.innerHTML += "paper";
        break;
      case 2:
        p_display.innerHTML += "scissors";
        break;
      default:
        console.log("not 0 , 1 or 2");
    }

    const CPU_option = Math.floor(Math.random() * 3);
    console.log(CPU_option);
    switch (CPU_option) {
      case 0:
        CPU_display.innerHTML += "rock";
        break;
      case 1:
        CPU_display.innerHTML += "paper";
        break;
      case 2:
        CPU_display.innerHTML += "scissors";
        break;
    }

    flag = 0;

    if (p_option == CPU_option) {
      game_status[0].innerHTML = "draw!";
    } else if (p_option == 0 && CPU_option == 1) {
      game_status[0].innerHTML = "CPU wins!";
    } else if (p_option == 0 && CPU_option == 2) {
      game_status[0].innerHTML = "you win!";
    } else if (p_option == 1 && CPU_option == 0) {
      game_status[0].innerHTML = "you win!";
    } else if (p_option == 1 && CPU_option == 2) {
      game_status[0].innerHTML = "CPU wins";
    } else if (p_option == 2 && CPU_option == 0) {
      game_status[0].innerHTML = "CPU wins!";
    } else if (p_option == 2 && CPU_option == 1) {
      game_status[0].innerHTML = "you win!";
    }

    reset_btn.addEventListener("click", function () {
      console.log("text..");
      flag = 1;
      game_status[0].innerText = "Select rock,paper or scissors";
      p_display.innerText = "You pick:";
      CPU_display.innerText = "CPU pick:";
    });
  }
}

pick_option();
