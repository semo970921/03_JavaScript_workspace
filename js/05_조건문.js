/**if 예제 - 양수인지 검사 */
function check1(){

    // id가 "input1"인 요소를 얻어와 in1 상수에 저장
    const in1 = document.getElementById("input1");

    // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여
    // val 상수에 저장
    const val = Number(in1.value);    

    if(val>0){
        alert(`${val}은/는 양수 입니다.`);
    }

    if(val<=0){
        alert(`${val}은/는 양수가 아닙니다.`);
    }
}

/**1~100 사이의 난수를 발생 시켜 홀/짝 판별하기 */
function check2(){
    const randomNumber = Math.floor(Math.random()*100+1);
    if(randomNumber%2 === 1){
        alert(`${randomNumber}은/는 [홀수] 입니다.`)
    }
    else{
        alert(`${randomNumber}은/는 [짝수] 입니다.`)
    }
}

/** 양수, 음수, 0 판별하기 */
function check3(){
    const input3 = document.getElementById("input3");
    const val = Number(input3.value);

    let result; // 결과를 저장할 변수 선언(현재 undefined)

    if(val > 0){
        result = "양수";
    }
    else if(val < 0){
        result = "음수"
    }
    else{
        result = "0";
    }

    alert(`${val}은/는 ${result} 입니다.`);
}

/** 어린이, 청소년, 성인 구분하기 */
function ageCheck(){
    const inputAge = document.getElementById("inputAge");
    const age = Number(inputAge.value);

    let result;

    // 잘못입력된 경우부터 시작해야 편해짐
    if(age<0 || age>120){
        result = "잘못 입력 하셨습니다."; /* 이제 범위가 0~120만 남음 */   
    } else if(age<=13){/* (age >= 0 && age <= 13) 같음 => 범위때문에 알아서 짤려짐 */
        result = "어린이";
    } else if(age <= 19){/* (age >= 14 && age <= 19) 같음 */
        result = "청소년";
    } else{
        result = "성인"
    }
    alert(result);
}

/** 두 수 A,B를 입력 받아 A가 B의 배수가 맞는지 확인 */
function check4(){
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");

    if(inputA.value.length === 0 || inputB.value.length === 0){
        alert("입력되지 않은 값이 존재합니다.");
        return; // 함수를 즉시 종료하고, 호출한 곳으로 돌아감
                // -> 함수를 수행할 수 없는 상태여서 미리 종료
    }

    //위 if문을 건너 뜀 == 둘 다 입력된 상태

    const v1 = Number(inputA.value);
    const v2 = Number(inputB.value);

    if(v1<v2){
        alert("A가 B보다 작습니다.")
        return;
    }

    // 위 if문 건너뜀 == A,B 모두 입력됨 + A가 B보다 크거나 같은 상태

    if(v1 % v2 == 0){ // A가 B의 배수가 맞을 경우
        alert(`${v1}은 ${v2}의 배수가 맞습니다.`);
        return;
    }
    
    alert(`${v1}은 ${v2}의 배수가 아닙니다.`);
}

/** 입력된 수가 3,4,5가 맞는지 확인 */
function check5(){
    const input5 = document.getElementById("input5");

    // 입력된 값이 없을 경우
    if(input5.value.length === 0){
        alert(`숫자를 입력 해주세요.`);
        return;
    }

    let result;
    switch(Number(input5.value)){
        case 3 : result = "3이 입력 되었습니다."; break;
        case 4 : result = "입력된 숫자는 4 입니다."; break;
        case 5 : result = "5를 입력하셨습니다."; break;
        default : result = "3,4,5가 아닌 다른 숫자가 입력 되었습니다.";
    }
    alert(result);
    
    /* switch문 -> if else문으로 변경 */
    let result2 ; // 결과 저장용 변수
    if(Number(input5.value === 3)){
        result2 = "3이 입력 되었습니다.";
    } else if (Number(input5 === 4)){
        result2 = "입력된 숫자는 4입니다.";
    } else if (Number(input5.value) === 5){
        result2 = "5를 입력하셨습니다.";
    } else {
        result2 = "3,4,5가 아닌 다른 숫자가 입력 되었습니다.";
    }

    alert(result2);
}

/** switch문을 이용한 계산기 */
function calc(op){
    console.log("매개 변수 op 확인: ", op, typeof op);

    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    if(number1.value.length === 0 || number2.value.length === 0){
        alert("숫자를 모두 입력 해주세요.");
        return;
    }

    const n1 = Number(number1.value);
    const n2 = Number(number2.value);

    let result;
    switch(op){
        case '+' : result = n1 + n2; break;
        case '-' : result = n1 - n2; break;
        case '*' : result = n1 * n2; break;
        case '/' : result = n1 / n2; break;
        case '%' : result = n1 % n2; break;
        default : result = "잘못된 연산자"
    }

    document.getElementById("calcResult").innerText = result;
}

/** 입력 받은 월(달)의 알맞은 계절 출력(break; 관련 예제) */
function check6(){
    const input6 = document.getElementById("input6");

    if(input6.value.length === 0){
        alert("월(달)을 입력해 주세요.");
        return;
    }

    switch(Number(input6.value)){
        // case 3,4,5 : // Java만 사용 가능(JS 안됨)
        case 3 : case 4 : case 5 : result = "봄"; 

        case 6 : case 7 : case 8 : result = "여름"; break;

        case 9 : case 10 : case 11 : result = "가을"; break;

        case 12 : case  1 : case  2 : result = "겨울"; break;

        default : result = "잘못 입력"
    }

    alert(result);
}

