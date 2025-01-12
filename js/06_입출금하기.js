// 잔액이 출력 되는 span 요소
const output = document.getElementById("output");
// 금액이 입력되는 input 요소
const amout = document.getElementById("amount");
// 잔액을 기록할 변수(초기값 10000)
let balance = 10000;
// 비밀번호 저장 변수(초기값 "1234")
const password = "1234";

// 잔액 초기값 출력
output.innerText = balance;

/* 금액 입력 input 태그의 value 값을 ""(빈칸)으로 변경
input에 작성된 값을 삭제하는 효과
-> 입,출금 함수 마지막에 사용하세요!!
*/
amount.value="";

/** 입금 */
function deposit(){

    // 입력된 금액을 얻어와 number 타입으로 변환 후 balance 변수에 누적
    balance += Number(amount.value); // 변수에만 누적이 되지, 화면에 표시X
    // 눈표시로 balance 봐바

    output.innerText = balance;
    amount.value = ""; // 입력하려고 작성한 금액 삭제
}

/** 출금 */
function withdrawal(){

    // 출금 버튼 클릭 시 prompt 이용해 비밀번호 입력 받기
    const pw = prompt("비밀번호를 입력하세요.");

    if(pw == null){ // prompt에서 취소 클릭
        alert("비밀번호 입력 취소");
        return;
    }

    if(pw != password){ // 입력받은 pw와 전역변수 password 불일치
        alert("비밀번호가 일치하지 않음");
        return;
    }

    const val = Number(amount.value); // 입력받은 금액 number 타입 변환
    if(val > balance){
        alert("출금 금액이 잔액보다 클 수 없습니다.");
        return;
    }

    balance -= val;

    output.innerText = balance; // 화면에 차감된 금액 출력
    amount.value=""; // 입력된 금액 삭제

    alert(`${val}원이 출금 되었습니다. 남은 잔액 : ${balance}`);
}

