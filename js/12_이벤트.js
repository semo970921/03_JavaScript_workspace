/** 인라인 이벤트 모델 확인 + this */
/* 다음 JS 함수는 클릭 이벤트에 따라 div 요소의 내용을 변경하는 기능 수행 */

function check1(divs){
    console.log(divs);

    /* 클릭이 되면 클릭된 숫자를 버튼(this를 통해 전달된 div)에 출력 */

    //  1)버튼에 작성된 내용 얻어오기
    let num = Number(divs.innerText)
    // -> 숫자 또는 NaN

    // 2) 얻어온 내용이 숫자가 아닌 경우
    // isNaN(값) : 값이 NaN인 경우 true, 숫자면 false
    if(isNaN(num)){ // 숫자가 아닌 경우
        divs.innerText = 1;
        return;
    }

    // 3) 얻어온 내용이 숫자인 경우
    divs.innerText = ++num; 
    
};

/* 고전 이벤트 모델 확인 */
const testA = document.querySelector("#testA");

testA.onclick = function(){
    console.log(this);
    alert("고전 이벤트 모델 확인됨");
};

/* 고전 이벤트 모델 제거 */
const testB =document.querySelector("#testB");
testB.onclick = function(){
 
    // testA가 클릭 되었을 때의 동작(핸들러)을 null로 덮어씌움
    // -> 이벤트 핸들러가 사라짐(제거)
    testA.onclick = null; 

    alert("확인 버튼 클릭 이벤트 핸들러 제거");
}

/* 고전 이벤트 모델 단점 확인 */
const testC = document.querySelector("#testC");
testC.onclick = function(){
    testC.style.background = "pink";
}

testC.onclick = function(){
    testC.style.fontSize = "40px";
}


//--------------------------------------------------------
/* 클릭할 수록 투명 */
const test1 = document.querySelector("#test1");

test1.addEventListener("click", function(){
    let current = test1.style.opacity;

    // 현재의 불투명 정도 확인
    // 처음엔 ""(빈칸)
    console.log("current: ", current); 

    if(current === ""){
        current = 1;
    };

    test1.style.opacity = current - 0.05; // 투명도를 0.05 감소

    if(test1.style.opacity < 0){
        test1.style.opacity = 1;
    };
});

/*  + 클릭 횟수 증가 */
test1.addEventListener("click", function(){
    let num = Number(test1.innerText);
    test1.innerText = ++num;
});

/* 버튼 배경색 변경 + 클릭시 #result2 배경색 변경 */
const btns = document.querySelectorAll(".btn-container > button");
const result2 = document.querySelector("#result2");

for(let i=0; i<btns.length; i++){
    btns[i].style.backgroundColor = btns[i].innerText;

    // 각 버튼에 클릭 되었을 때(이벤트 리스너)의 동작(이벤트 핸들러) 추가
    btns[i].addEventListener("click", function(){
        result2.style.backgroundColor = btns[i].innerText;
    });
};

/* 버튼 클릭시 input 요소에 작성된 색상 값 얻어와 배경색 변경하기 */
const changeBtn = document.querySelector("#changeBtn");
const inputColor = document.querySelectorAll(".inputColor");
const display = document.querySelectorAll(".display");

changeBtn.addEventListener("click", function(){
    for(let i=0; i<inputColor.length; i++){
        display[i].style.backgroundColor = inputColor[i].value; 
    };
});