const boxes = document.querySelectorAll('.box');
const message = document.getElementById('message');
const popup = document.getElementById('popup');
var winnerPlayer = null;
var currentPlayer = 'o';
var counter = 0;
const winRed = '#F8615A';
const winBlue = '#52D3D8';
boxes.forEach((box) => {
  box.addEventListener("click", function() {
    buttonClicked(this.getAttribute('position'));
    this.disabled = true;

  });
});


function buttonClicked(position){
  document.getElementById(`mat-${position}`).innerText = currentPlayer;
  changeCurrentPlayer();
  counter++;
  
  if( counter >=5){
   winnerPlayer = checkWinner();

  }
  if(winnerPlayer){
    boxes.forEach((box)=>{
      box.disabled = true;
    });
    if(winnerPlayer === 'o'){
      message.innerText = `player Red win.`;
      document.querySelector('body').style.backgroundColor = winRed;
    } else {
      message.innerText = `player Blue win.`;
      document.querySelector('body').style.backgroundColor = winBlue;
    } 
    popup.classList.remove("popup-hide");
    popup.classList.add("popup-show");
  }
  if(counter>=9){
    popup.classList.add("popup-show");
    popup.classList.add("popup-show");
    message.innerText = `It's a tie.`;
  }
}
function changeCurrentPlayer(){
  if(currentPlayer == 'o'){
    currentPlayer = 'x';
    document.querySelector('body').style.backgroundColor = winBlue;
  }
  else {
    currentPlayer = 'o';
    document.querySelector('body').style.backgroundColor = winRed;
  }
}
function checkWinner(){

  var matrix = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];
  boxes.forEach((box)=>{
    const position = box.getAttribute('position');
    const posiHig = Math.floor(position/10);
    const posiLow = position%10;
    matrix[posiHig][posiLow] = box.innerText;

  });
  for(let i = 0 ; i <= 2; i++){
    if(matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]){
      return matrix[i][0];
    }
    if(matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]){
      return matrix[0][i];
    }
  }
  if(matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]){
      return matrix[0][0];
  }
  if(matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]){
      return matrix[0][2];
  } 
  console.log(matrix);
}


