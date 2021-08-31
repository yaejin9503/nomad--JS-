const quotesArray = [ 
    { 
        data: "dfd", 
        writer: "f"
    },
    { 
        data: "f", 
        writer: "fdfd"
    },
    { 
        data: "zf", 
        writer: "gd"
    },
    { 
        data: "dfddddd", 
        writer: "zdf"
    },
    { 
        data: "fefff", 
        writer: "zfdf"
    },
]

const quotes = document.querySelector("#quotes span:first-child"); 
const writer = document.querySelector("#quotes span:last-child"); 

const random = quotesArray[Math.floor(Math.random()*quotesArray.length)]; 
quotes.innerText = random.data; 
writer.innerText = random.writer; 