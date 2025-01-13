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
    
}


