/** 인라인 이벤트 모델 확인 + this */
/* 다음 JS 함수는 클릭 이벤트에 따라 div 요소의 내용을 변경하는 기능 수행 */

function check1(div){
    console.log(div);

    /* 클릭이 되면 클릭된 숫자를 버튼(this를 통해 전달된 div)에 출력 */

    //  1)버튼에 작성된 내용 얻어오기
    let num = Number(div.innerText)
    // -> 숫자 또는 NaN

    // 2) 얻어온 내용이 숫자가 아닌 경우
    // isNaN(값) : 값이 NaN인 경우 true, 숫자면 false
    if(isNaN(num)){ // 숫자가 아닌 경우
        div.innerText = 1;
        return;
    }

    // 3) 얻어온 내용이 숫자인 경우
    div.innerText = ++num; 
    
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
/* 클릭할 수록 투명 + 클릭 횟수 증가 */
const test1 = document.querySelector("#test1");

// 클릭할 수록 투명(첫 번째 감지기)
test1.addEventListener("click", function(){
    // click : 감지할 이벤트 종류
    // function(){} : 이벤트가 감지되었을 때 수행할 이벤트 핸들러

    let current = test1.style.opacity;

    console.log("현재 투명도 : ", current);
    // => 처음엔 ""(빈칸)
    
   if(current === ""){
    current = 1;
   }

   test1.style.opacity = current - 0.05; // 투명도를 0.05ㄱ감소

   if(test1.style.opacity < 0){ // 투명도가 0 미만이 된 경우(완전히 투명해진 이후)
        test1.style.opacity = 1; 
   }
});

// 클릭 시 숫자 1씩 증가(두 번째 감지기)
test1.addEventListener("click", function(){
    
    // #test1에 작성된 내용 얻어와 숫자로 변경
    let num = Number(test1.innerText);
    test1.innerText = ++num;
});

/* 클릭한 버튼에 작성된 색으로 배경색 변경하기  */
const btns = document.querySelectorAll(".btn-container > button");
// btns는 유사배열 형태!
const result2 = document.querySelector("#result2");

for(let i=0; i<btns.length; i++){

    // 각 버튼의 배경색을 버튼에 작성된 색상으로 변경
    btns[i].style.backgroundColor = btns[i].innerText;

    // 각 버튼에 클릭 되었을 때(이벤트 리스너)의 동작(이벤트 핸들러)을 추가
    btns[i].addEventListener("click",function(){

        // #result2의 배경색을 클릭된 버튼에 작성된 색상으로 변경
        result2.style.backgroundColor = btns[i].innerText;
    })
}