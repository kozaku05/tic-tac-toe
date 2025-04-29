const message = document.getElementById("message");
let isEnd = false;
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let player = "O";
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
    judgement();
    player == "O" ? (player = "X") : (player = "O");
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
      return;
    } else if (
      board[0][i] == player &&
      board[1][i] == player &&
      board[2][i] == player
    ) {
      console.log("win!" + player);
      message.textContent = player + "の勝ちです！";
      isEnd = true;
      return;
    }
  }
  if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
    console.log("win!" + player);
    message.textContent = player + "の勝ちです！";
    isEnd = true;
    return;
  } else if (
    board[0][2] == player &&
    board[1][1] == player &&
    board[2][0] == player
  ) {
    console.log("win!" + player);
    message.textContent = player + "の勝ちです！";
    isEnd = true;
    return;
  }
  for (const row of board) {
    for (const cell of row) {
      if (cell == 0) {
        return;
      }
    }
  }
  console.log("draw!!");
  message.textContent = "引き分けです！";
  isEnd = true;
}
