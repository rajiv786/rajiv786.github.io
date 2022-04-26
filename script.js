const quoteContainer = document.getElementById('container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterbtn = document.getElementById('twitter');
const newQuotebtn = document.getElementById('new-quote');
let apiQuotes=[];
//show New Quote
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   if(!quote.author){
       authorText.textContent='unknown';
   }
   else{
    authorText.textContent = quote.author;
   }
   if(quote.text.length>50){
       quoteText.classList.add('longquote');
   }
   else{
       quoteText.classList.remove('longquote');
   }
    quoteText.textContent = quote.text;
    complete();
}
//get quotes from api 
async function getQuotes(){
    const apiUrl ='https://type.fit/api/quotes';
    try{
        const response =await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    }
    catch(error){

    }

}
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
//event listener
newQuotebtn.addEventListener('click',newQuote);
twitterbtn.addEventListener('click',tweetQuote);
//onload 
getQuotes();
newQuote();