
const loginForm = document.querySelector('#login-form'); 
const loginInput = loginForm.querySelector("#login-form input");  

const $h1 = document.querySelector("#greeting");
const link = document.querySelector("a"); 
/**
 * 막 일어난 정보를 e에 담아서 보내즘/
 */

const HIDDEN_CLASSNAME = "hidden";  //변하지 않는 문자열을 저장하고 싶을 때 대문자로 표기,

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
    $h1.innerText = `Hello ${username}!!` 
    $h1.classList.remove(HIDDEN_CLASSNAME);
}

function clicked(event){
    event.preventDefault(); 
    console.dir(event)
}

loginForm.addEventListener('submit', handleClick);  
link.addEventListener('click', clicked); 