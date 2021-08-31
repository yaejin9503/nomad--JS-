const clock = document.querySelector("#clock"); 

// 

function getClock(){ 
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); //5초마다 실행 
// setInterval(실행해야할 함수, 몇초분시마다 실행해야 하는지); 



//intererval timeout 
// interval => 매번 무슨일이 일어나야하는것. 