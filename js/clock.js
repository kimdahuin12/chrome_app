const clockTitle = document.querySelector("h2#clock");

//interver : 매번 일어나야 하는것
//timeout : 몇 초 후 일어나도록 하는 것
//"1".padStart(2, "0");//문자열을 2개의 길이로 만드는데, 앞부분은 0으로 채워준다.

function getClock(){
    const date = new Date;
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clockTitle.textContent = `${hours}:${minutes}:${seconds}`;
}
/*

우공이산(愚公移山) : 오랜 시간이 걸려도 꾸준히 노력해 나간다면 결국엔 뜻을 이룰 수 있다.

*/
// setInterval(sayHello, 5000); //5초마다 sayHello함수 실행
//setTimeout(sayHello, 1000); //1초가 지난 후 sayHello함수 실행
getClock();
setInterval(getClock, 1000);