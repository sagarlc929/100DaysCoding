/*
 <div class="currency-converter-container">
      <div class="country-div">
        <img src=""><span></span><input id="usa" class="input-element" type="number">
      </div>
      <div class="country-div">
        <img src=""><span></span><input id="npl" class="input-elemen" type="number">
      </div>
      <div class="country-div">
        <img src=""><span></span><input id="ind" class="input-element"type="number">
      </div>
 */
const inputElement = document.querySelectorAll('input[type="number"]');
inputElement.forEach(input =>{
  input.min = 0;
  input.addEventListener('input',function(){
    updateCurrecy(input.id,input.value) ;

  });
});
const currencyExRatio = {
  USA:1,
  NPL:133.74,
  IND:83.49,
  JPN:151.25,
  BTN:83.14,
  CHN:7.23,
  GBR:0.79,
  KOR:1343.70
};
function updateCurrecy(id,value){
  let intoUSA = 0;
    intoUSA = value/currencyExRatio[id];
  inputElement.forEach(input=>{
    if(input.id !==id){
      let id= input.id;
      input.value= (intoUSA*currencyExRatio[id]).toFixed(2);
    }
  });
}
console.log(currencyExRatio['NPL']);
