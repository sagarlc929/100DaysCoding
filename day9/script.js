/*
  <div class="quote-container">
    <p>
      <span class="quote-symbol">"</span>
      <span class="quote"></span>
      <span class="quote-symbol">"</span>
      <span  class="block">
        <span class="similar-symbol">~</span>
        <span class="author-name"></span>
      </span>
    </p>
*/  
const quote = document.getElementById("quote");
const authorName = document.getElementById("author-name");
const quoteAuthor = document.getElementById("quote-author");
const quoteObj = [
{
    "name": "Alan Turing",
    "description": "Sometimes it is the people no one can imagine anything of who do the things no one can imagine."
  },
  {
    "name": "Grace Hopper",
    "description": "The most dangerous phrase in the language is, 'We've always done it this way.'"
  },
  {
    "name": "Steve Jobs",
    "description": "The only way to do great work is to love what you do."
  },
  {
    "name": "Linus Torvalds",
    "description": "Talk is cheap. Show me the code."
  },
  {
    "name": "Larry Page",
    "description": "Always deliver more than expected."
  }
];
function displayQuote(){
 const opacityElements = document.querySelectorAll('.opacity');
  opacityElements.forEach((element,index)=>{

    //setTimeout(() => {
      element.style.opacity = 0;
   // },index* 1000); 
  });
  quote.innerHTML ="";
  authorName.innerHTML="";


  const randomKey = Math.floor(Math.random() * quoteObj.length);
  //quote.innerText = quoteObj[randomKey].description; 
  const descriptionArray =  (quoteObj[randomKey].description).split(" ");
  descriptionArray.forEach(word=>{
    quote.innerHTML += '<span class="opacity">'+ word + ' <span>';
  });
  //authorName.innerText = quoteObj[randomKey].name;
  const authorArray =  (quoteObj[randomKey].name).split(" ");
  authorArray.forEach(word=>{
    authorName.innerHTML += '<span class="opacity">'+ word + ' <span>';
  });

  readAnimaion();
  //console.log(quoteAuthor.innerText);
}

function readAnimaion(){
  const opacityElements = document.querySelectorAll('.opacity');
  opacityElements.forEach((element,index)=>{
    //opacityElements.sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
      
    setTimeout(() => {
      element.style.opacity = 1;
    },index* 1000/2); 
  });

}
