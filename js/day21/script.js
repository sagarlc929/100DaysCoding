/*
    <div id="slider-div">
      <div id="display-div">
        <div class="button-div">
          <button id="button-left">&lt;</button>
        </div>
        <div id="image-div">
        </div>
        <div class="button-id">
          <button id="button-right">&gt;</button>
        </div>
      </div>
      <div id="caption-div">
      </div>
*/ 
const imageDiv = document.getElementById('image-div');
const btnLeft = document.getElementById('button-left');
const btnRight = document.getElementById('button-right');
const captionDiv = document.getElementById('caption-div');

const imgDes = [
  {imgUrl:"img/img1.jpg", imgDes:"water"},
  {imgUrl:"img/img2.jpg", imgDes:" picture"},
  {imgUrl:"img/img3.jpg", imgDes:"beautiful picture"},
  {imgUrl:"img/img4.jpg", imgDes:"beautiful picture"}
];
var imgIndex = 0;
showImage();
function showImage(){
  const imgHTML = `<img src="${imgDes[imgIndex].imgUrl}">`;
  imageDiv.innerHTML = imgHTML;
  captionDiv.innerText = imgDes[imgIndex].imgDes;
}
btnRight.addEventListener('click',()=>{
  if(imgIndex>=imgDes.length-1){

    imgIndex = 0;
  } else{
    imgIndex++;
  }
  showImage() ;
});
btnLeft.addEventListener('click',()=>{
  if(imgIndex<=0){

    imgIndex = imgDes.length-1;
  } else{
    imgIndex--;
  }
  showImage() ;
});

