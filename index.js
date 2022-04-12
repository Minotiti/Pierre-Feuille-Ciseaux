var playerWin = 0;
var CPUWin = 0;

//Detecting button presses

for (i = 0; i < document.querySelectorAll(".game-button").length; i++) {
  document.querySelectorAll(".game-button")[i].addEventListener("click", function() {
    var item = this.className;
    var itemPlayer = itemImage(item);
    var itemCPU = CPUitem();
    winnerSelector(itemPlayer, itemCPU);
  })
}

//Selected item

function itemImage(itemClass) {

  switch (itemClass) {
    case "rock game-button":
      var playerImg = 1;
      break;
    case "paper game-button":
      var playerImg = 2;
      break;
    case "cisors game-button":
      var playerImg = 3;
      break;

    default:
      console.log(itemClass);
  }

  document.querySelector(".Player-img").setAttribute("src", "images/game" + playerImg + ".png");
  return playerImg;
}

//CPU item

function CPUitem() {
  var CPUimage = Math.floor(Math.random() * 3) + 1;
  document.querySelector(".CPU-img").setAttribute("src", "images/game" + CPUimage + ".png");
  return CPUimage;
}

//Choosing a winner

function winnerSelector(playerValue, CPUValue) {
  if (playerValue === CPUValue) {
    document.querySelector(".winner").innerHTML = "Egalite";
  } else if ((playerValue === 1 && CPUValue === 3) || (playerValue === 2 && CPUValue === 1) || (playerValue === 3 && CPUValue === 2)) {
    document.querySelector(".winner").innerHTML = "Joueur gagne";
    playerWin++;
    document.querySelector(".player-score").innerHTML = "Joueur : " + playerWin;
  } else {
    document.querySelector(".winner").innerHTML = "Ordi gagne";
    CPUWin++;
    document.querySelector(".CPU-score").innerHTML = "Ordi : " + CPUWin;
  }

}
