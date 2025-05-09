const message = document.getElementById("message");
let isEnd = false;
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let player = "O";
message.textContent = player + "の番です！";
function Overwrite(num1, num2) {
  if (isEnd) return;
  num1--;
  num2--;
  if (board[num1][num2] === 0) {
    board[num1][num2] = player;
    document.getElementById(`${++num1}-${++num2}`).textContent = "";
    document
      .getElementById(`${num1}-${num2}`)
      .setAttribute("data-symbol", player);
    if (judgement()) return;
    player == "O" ? (player = "X") : (player = "O");
    message.textContent = player + "の番です！";
    console.log(board);
  }
}
function judgement() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] == player &&
      board[i][1] == player &&
      board[i][2] == player
    ) {
      console.log("win!" + player);
      message.textContent = player + "の勝ちです！";
      isEnd = true;
      return true;
    } else if (
      board[0][i] == player &&
      board[1][i] == player &&
      board[2][i] == player
    ) {
      console.log("win!" + player);
      message.textContent = player + "の勝ちです！";
      isEnd = true;
      return true;
    }
  }
  if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
    console.log("win!" + player);
    message.textContent = player + "の勝ちです！";
    isEnd = true;
    return true;
  } else if (
    board[0][2] == player &&
    board[1][1] == player &&
    board[2][0] == player
  ) {
    console.log("win!" + player);
    message.textContent = player + "の勝ちです！";
    isEnd = true;
    return true;
  }
  for (const row of board) {
    for (const cell of row) {
      if (cell == 0) {
        return false;
      }
    }
  }
  console.log("draw!!");
  message.textContent = "引き分けです！";
  isEnd = true;
  return true;
}

function reMatch() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      document.getElementById(`${i}-${j}`).textContent = "_";
      document.getElementById(`${i}-${j}`).removeAttribute("data-symbol");
    }
  }
  isEnd = false;
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  player = "O";
  message.textContent = player + "の番です！";
}
