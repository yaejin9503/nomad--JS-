const quotesArray = [ 
    { 
        data: "어디를 가든 마음 다해 가라", 
        writer: "공자"
    }
]

const quotes = document.querySelector("#quotes span:first-child"); 
const writer = document.querySelector("#quotes span:last-child"); 

const random = quotesArray[Math.floor(Math.random()*quotesArray.length)]; 
quotes.innerText = random.data; 
writer.innerText = random.writer; 