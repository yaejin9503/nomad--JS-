const h2 = document.querySelector(".hello h2"); 

function handlleh2Click(){ 
    //h2.style.color = h2.  style.color ==="blue" ? "tomato" : "blue";  
    h2.classList.toggle("active"); 
    // classList에 active라는 클래스명이 존재하면 지우고 , 있으면 추가해줌. 
}

h2.addEventListener("click", handlleh2Click);


//this.onClick = handleHelloClick; 
//하지만 addEventListener을 더 선호하는 이유는 removeEventLister로 evnet를 지울 수 있기 때문! 

// hello.addEventListener("mouseenter", handleMouseEnter); 
// hello.addEventListener("mouseleave", handleMouseLeave); 

// document.querySelector => return one element
// 여러개 일 경우 첫번째가 나옴. 
// document.querySelectorAll => return several element
// 여러개일 경우 전부를 return 해줌





// window.addEventListener("resize", handleWindowResize); 
// window.addEventListener("copy", handleCopy); 
// window.addEventListener("offline", handleWindowOffline); 
// window.addEventListener("online", handleWindowOnLine); 

// function handleMouseEnter(){ 
//     hello.innerText = "Mouse is here"; 
// }

// function handleMouseLeave(){ 
//     hello.innerText = "Mouse is gone"; 
// }

// function handleWindowResize(){ 
//     document.body.style.backgroundColor = "tomato"; 
// }

// function handleCopy(){ 
//     alert("copier!");
// }

// function handleWindowOffline(){ 
//     alert( "SOS offline"); 
// }

// function handleWindowOnLine(){ 
//     alert("onlie!!!!")
// }