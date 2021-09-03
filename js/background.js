const images = [ 
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
]

const chosen = images[Math.floor(Math.random() * images.length)]; 

const bgImage = document.createElement("img"); 

bgImage.src= `img/${chosen}`; 

document.body.appendChild(bgImage); 