/* 계산 하기 */
const calc = document.querySelector("#calc");
calc.addEventListener("click", ()=>{

    const inputs = document.querySelectorAll(".input-number");
    
    let sum = 0;

    for(let input of inputs){
        sum += Number(input.value);

    }

    alert(`합계 : ${sum}`);
})

/* 추가 하기 */
const addBtn = document.querySelector("#add"); // 추가 버튼
const container = document.querySelector(".container");  // 감싸는 요소

addBtn.addEventListener("click", () => {

    const div = document.createElement("div");
    div.className = "row";

    const input= document.createElement("input");
    input.className = "input-number";
    input.type = "number"

    const span= document.createElement("span");
    span.className = "remove-row";
    span.innerHTML = "&times"; //HTML의 특수 문자는 innerHTML사용


    /* 만들어진 span(x버튼) 요소에 이벤트 리스너 추가 */
    span.addEventListener("click",e => {
        // e.target : 이벤트가 발생한 타겟(즉, 클릭된 요소 => x버튼)
        e.target.parentElement.remove(); // 한 줄(.row) 제거
    });

    div.append(input, span);

    container.append(div);
});