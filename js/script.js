var sum = 0;
var lock = false;

allowDrop = (ev) => {
  ev.preventDefault();
  lock = false;
};

drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
};

drop = (ev) => {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (ev.target.id == "cell" + sum) {
    document.getElementById("cell" + sum).style.background = "transparent";
    if (ev.target.id == "cell4") {
      sum = 25;
      document
        .getElementById("cell25")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell21") {
      sum = 39;
      document
        .getElementById("cell39")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell29") {
      sum = 74;
      document
        .getElementById("cell74")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell43") {
      sum = 76;
      document
        .getElementById("cell76")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell63") {
      sum = 80;
      document
        .getElementById("cell80")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell71") {
      sum = 89;
      document
        .getElementById("cell89")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell30") {
      sum = 7;
      document
        .getElementById("cell7")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell47") {
      sum = 15;
      document
        .getElementById("cell15")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell56") {
      sum = 19;
      document
        .getElementById("cell19")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell73") {
      sum = 51;
      document
        .getElementById("cell51")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell82") {
      sum = 42;
      document
        .getElementById("cell42")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell92") {
      sum = 75;
      document
        .getElementById("cell75")
        .appendChild(document.getElementById(data));
    } else if (ev.target.id == "cell98") {
      sum = 55;
      document
        .getElementById("cell55")
        .appendChild(document.getElementById(data));
    } else {
      ev.target.appendChild(document.getElementById(data));
    }
  }
};

generateMap = () => {
  board = document.getElementById("board");
  for (let i = 100; i >= 91; i--) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
  for (let i = 81; i <= 90; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
  for (let i = 80; i >= 71; i--) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
  for (let i = 61; i <= 70; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
  for (let i = 60; i >= 51; i--) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
  for (let i = 41; i <= 50; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
  for (let i = 40; i >= 31; i--) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
  for (let i = 21; i <= 30; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
  for (let i = 20; i >= 11; i--) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
  for (let i = 1; i <= 10; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    cell.addEventListener("dragover", allowDrop);
    cell.addEventListener("drop", drop);
    board.appendChild(cell);
  }
};

detectDiceNumber = (x, y) => {
  let n;
  if (y % 4 == 0) {
    n = 4;
    if (x % 4 == 0) {
      n = 4;
    } else if (x % 4 == 1) {
      n = 6;
    } else if (x % 4 == 2) {
      n = 3;
    } else if (x % 4 == 3) {
      n = 1;
    }
  } else if (y % 4 == 3) {
    n = 2;
  } else if (y % 4 == 2) {
    n = 3;
    if (x % 4 == 0) {
      n = 3;
    } else if (x % 4 == 1) {
      n = 1;
    } else if (x % 4 == 2) {
      n = 4;
    } else if (x % 4 == 3) {
      n = 6;
    }
  } else if (y % 4 == 1) {
    n = 5;
  }
  return n;
};

start = () => {
  document.getElementById("welcome").style.display = "none";

  document.body.style.display = "block";
  document.getElementsByTagName("article")[0].style.display = "flex";

  var player1 = document.getElementById("player1");
  player1.addEventListener("dragstart", drag);

  var playerBox = document.getElementById("pbox");
  playerBox.addEventListener("dragover", allowDrop);
  playerBox.addEventListener("drop", drop);
  playerBox.appendChild(player1);

  document.getElementsByTagName("aside")[0].style.display = "flex";

  generateMap();
};

roll = () => {
  if (lock == false) {
    document.getElementById("cube").style.transform =
      "rotateX(0deg) rotateY(0deg)";

    var num = document.getElementById("number");
    var x = Math.ceil(Math.random() * 18);
    var y = Math.ceil(Math.random() * 18);
    var n = 4;

    document.getElementById("cube").style.transform =
      "rotateY(" + y * 90 + "deg) rotateX(" + x * 90 + "deg)";

    n = detectDiceNumber(x, y);

    num.innerHTML = n;
    console.log(n);

    for (let i = 100; i > 0; i--) {
      if (document.getElementById("cell" + i).style.background == "") {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }

    if (flag == true) {
      if (n == 6) {
        document.getElementById("cell1").style.background =
          "rgba(255, 0, 0, 0.8)";
        lock = true;
        sum = 1;
      }
    } else {
      if (100 - sum >= n) {
        sum += n;
        document.getElementById("cell" + sum).style.background =
          "rgba(255, 0, 0, 0.8)";
        lock = true;
      }
    }

    if (sum == 100) {
      document.getElementById("btn-roll").style.display = "none";
      var p = document.createElement("p");
      var txt = document.createTextNode("Finished!");
      p.appendChild(txt);
      document.getElementsByClassName("roll")[0].appendChild(p);
    }
  }
};
