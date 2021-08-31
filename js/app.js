
const loginForm = document.querySelector('#login-form'); 
const loginInput = loginForm.querySelector("#login-form input");  

const $h1 = document.querySelector("#greeting");
const link = document.querySelector("a"); 
/**
 * 막 일어난 정보를 e에 담아서 보내즘/
 */

const HIDDEN_CLASSNAME = "hidden";  //변하지 않는 문자열을 저장하고 싶을 때 대문자로 표기,
const USERNAME_KEY ="username"; 
// 변하는 string값을 const로 지정 하는 이유는 -> 실수를 만들고 싶지 않는 string이라는 사실을 기억하고 상기시키기 좋음! 

function handleClick(e){ 
    e.preventDefault(); 
    /**
     * preventDefault() 어떤 event의 기본 행동이든지 발생되지 않도록 해줌..! 
     * 여기선 form 안에 submit 버튼이 있으면 값을 입력하고 누르면 
     * 창이 새로고침 되기 때문에 이렇게 해준것..! 
     */
    // console.log(e);
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value;
    paintGreeting(username);
    localStorage.setItem(USERNAME_KEY, username); 
}

function clicked(event){
    event.preventDefault(); 
    console.dir(event)
}

function paintGreeting(username){ 
    $h1.classList.remove(HIDDEN_CLASSNAME); 
    $h1.innerText = `Hello ${username}!!`; 
}

const savedUsername = localStorage.getItem(USERNAME_KEY); 

if(savedUsername === null){ 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', handleClick);
}else{ 
    paintGreeting(savedUsername);
}

  
link.addEventListener('click', clicked); 