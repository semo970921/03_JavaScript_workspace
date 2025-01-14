/* window.setTimeout(함수,지연시간(ms)) */
const check1 = document.querySelector("#check1");
check1.addEventListener("click", () => {

    console.log("바로 출력되는 문자열");

    window.setTimeout( () => {
        console.log("3초 후에 출력되는 문자열");
    }, 3000); // 콘솔 확인

    // 비동기 확인
    setTimeout( () => {
        console.log("2초 후에 출력되는 문자열");
    }, 2000);

    setTimeout( () => {
        console.log("1초 후에 출력되는 문자열");
    }, 1000);

    window.setTimeout( () => {
        console.log("4초 후에 출력되는 문자열");
    }, 4000);
});


( () => {
    const clock = document.querySelector("#clock");

    clock.innerText = new Date();

    // 1초가 지날 때 마다 반복
    // 0 ~ 1일때는 없다가 1초 지나가야 나옴 
    // => 따라서 위에 구문 치면 들어가자마자 생기게 할 수 있음
    setInterval( () => {
        clock.innerText = new Date();
    }, 1000);
} ) ();


