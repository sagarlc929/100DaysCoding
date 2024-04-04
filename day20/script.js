/*
 <div id="pass-gen-container">
      <div id="pass-menu">
        <div id="display-div">
        </div>
        <button id="copy-btn">Copy</button>
      </div>
      <div id="length-div">
        <span>Length:<input type="number" id="length-inp"/></span>
      </div>
      <div id="generate-div">
        <button id="generate-div">generate</button>
      </div>
    </div>
*/
const generateBtn = document.getElementById('generate-btn');
const displayDiv = document.getElementById('display-div');
const lengthInp = document.getElementById('length-inp');
const copyBtn = document.getElementById('copy-btn');
const stringList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:\'",.<>?/';

const strLisLen = stringList.length;
console.log(randomString(5));
var pass = "";
lengthInp.addEventListener('input', function() {
  if (this.value < 0) {
    this.value = 0;
  } else if (this.value > 256) {
    this.value = 256;
  }
});
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(pass)
    .then(() => {

copyBtn.style.backgroundImage = "linear-gradient(to bottom right, rgba(60, 179, 113, 1), rgba(0, 123, 255, 0.01))";

    })
    .catch(err => {
      copyBtn.style.backgroundColor = "tomato";
      console.error('Failed to copy: ', err);
    });
});
  generateBtn.addEventListener('click',()=>{
copyBtn.style.backgroundImage = "linear-gradient(to bottom right, rgba(60, 179, 113, 0.6), rgba(0, 123, 255, 0.2))";
  let spanText="";
  pass = randomString(lengthInp.value);
  //console.log(pass);
  for(let i= 0; i<lengthInp.value;i++){
    //console.log(i);
   // console.log(pass.charAt(i));
    spanText += `<span class="opacity">${pass.charAt(i)}</span>`
  }
  displayDiv.innerHTML = spanText;
// const hazeSpan = document.querySelectorAll('.haze');
//   hazeSpan.forEach((eachSpan)=>{
//     eachSpan.value = convertToHtmlFormat(eachSpan.value);
//   });
//
readAnimaion();
});
function randomString(lenOfStr){
  let txt="";
  for(let i=0; i<lenOfStr;i++){
    txt += stringList[randomIndex()];
  }
  return txt;
}

function randomIndex(){
  return Math.floor(Math.random()*(strLisLen));
}
function readAnimaion(){
  const opacityElements = document.querySelectorAll('.opacity');
  opacityElements.forEach((element,index)=>{
    //opacityElements.sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
      
    setTimeout(() => {
      element.style.opacity = 1;
    },index* 1000/10); 
  });

}

