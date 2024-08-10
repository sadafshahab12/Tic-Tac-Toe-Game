let boxes_btn = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_btn = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg-for-winner");
let message = document.querySelector("#message");

// 2D array =  array of array let arr2 = [[1,2], [3,4], [5,6]]
let turn0 = true; //player0

let win_patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// action on button
boxes_btn.forEach((box) => {
  box.addEventListener("click", () => {
    //we added event listener for circulate the turn of player one by one
    if (turn0) {
      //playerO
      box.innerHTML = "O";
      turn0 = false;
    } else {
      //playerX
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    check_winner(); // here this function is checking which player is the winner
  });
});

const reset_game = () => {
  turn0 = true;  
  enable_box();
  msg_container.classList.add("hide"); //it is added for when we press new button it will hide again
};

//here we disabled box after winning the game
const disable_box = () => {
  for (let box of boxes_btn) {
    box.disabled = true;
  }
};

//here we enable the game box for reset game and for new game
const enable_box = () => {
  for (let box of boxes_btn) {
    box.disabled = false; //enable boxes for new game
    box.innerText = ""; // clean the box after reset and click on new button
  }
};

const show_winner = (winner) => {
  message.innerText = `Congratulations! The Winner is ${winner} `; //This is inserting the message in the hidden space
  msg_container.classList.remove("hide"); // here we added a message for winner by removing hide class it will show the line after winning.
  disable_box(); //here disable box after winning because unless the second player win.
};
const none_winner = (winner) => {
  message.innerText = `No one is winner, restart the game `; //This is inserting the message in the hidden space
  msg_container.classList.remove("hide"); // here we added a message for winner by removing hide class it will show the line after winning.
  disable_box();

};
const check_winner = () => {
  for (let pattern of win_patterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes_btn[pattern[0]].innerText,
    //   boxes_btn[pattern[1]].innerText,
    //   boxes_btn[pattern[2]].innerText
    // );
    let pos1_val = boxes_btn[pattern[0]].innerText; // this syntax check teh value that is matching in all 3 positions
    let pos2_val = boxes_btn[pattern[1]].innerText;
    let pos3_val = boxes_btn[pattern[2]].innerText;

    if (pos1_val != "" && pos2_val != "" && pos3_val != "") {
      //if the value is not empty
      if (pos1_val === pos2_val && pos2_val === pos3_val) {
        // if the value are equal in boxes
        console.log("winner" + pos1_val);
        show_winner(pos1_val);
      }
 
    }
  }
};

reset_btn.addEventListener("click", reset_game); //on click it will reset
new_btn.addEventListener("click", reset_game); // on click new game will start
