const quotes = [
{
    quote : "If you do what you need, you’re surviving. If you do what you want, you’re living.",
    author: "Unknown",
},
{
    quote : "Life can only be understood backwards; but it must be lived forwards.",
    author: "Søren Kierkegaard",
},
{
    quote : "Beware the barrenness of a busy life.",
    author: "Socrates",
},
{
    quote : "Life is beautiful, as long as it consumes you. When it is rushing through you, destroying you, life is gorgeous, glorious. It’s when you burn a slow fire and save fuel, that life’s not worth having.",
    author: "D. H. Lawrence",
},
{
    quote : "Here is the test to find whether your mission on Earth is finished: if you’re alive, it isn’t.",
    author: "Richard Bach",
},
{
    quote : "If you try, you risk failure. If you don’t, you ensure it.",
    author: "Anonymous",
},
{
    quote : "So keep your head high, keep your chin up, and most importantly, keep smiling, because life’s a beautiful thing and there’s so much to smile about.",
    author: "Marilyn Monroe",
},
{
    quote : "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
},
{
    quote : "Life is a spell so exquisite that everything conspires to break it.",
    author: "Emily Dickinson",
},
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];//0~quotes.length-1
quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;