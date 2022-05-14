
// const loginForm = document.querySelector("#login-form");
// const loginBtn = loginForm.querySelector("button");
// const loginInput = loginForm.querySelector("input");
const loginBtn = document.querySelector("#login-form button");
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const btnLogout = document.querySelector("#btn-logout");
const nameGreeting = document.querySelector("#greeting");
const mainForm = document.getElementById("main-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(e){ //e와 같이 공간을 만들어주면 그 공간에 지금 일어난 일에 대한 정보를 준다.(addEventListener)
    e.preventDefault();//어떤 이벤트의 기본 행동이던 발생하지 않도록 함.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    mainForm.classList.remove(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function onLogout(){
    localStorage.removeItem(USERNAME_KEY);
    mainForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(e){
    e.preventDefault();
    console.dir(e);
    alert("hi");
}

function paintGreetings(useName){
    nameGreeting.classList.remove(HIDDEN_CLASSNAME);
    btnLogout.classList.remove(HIDDEN_CLASSNAME);
    btnLogout.addEventListener("click", onLogout);
    nameGreeting.innerHTML ="Hello, "+ useName;
}

const savedUserName = localStorage.getItem("userName");
if(savedUserName===null){
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    mainForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);//누군가 form을 submit하면 페이지는 새로고침되도록 되어있다.

}else{
    //show userName
    paintGreetings(savedUserName);
    btnLogout.addEventListener("click", onLogout);
}
