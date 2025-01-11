// id가 일치하는 input 요소를 얻어와 변수에 저장
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const calcResult = document.getElementById("calcResult");

/** 더하기 함수 */
function plusFn(){
    const value1 = Number(input1.value); 
    const value2 = Number(input2.value);

    console.log("두 수의 합: ", value1 + value2);

    /* #calcResult의 내용(inner Text(0))으로 출력
       calcResult.innerText로 콘솔창에 입력해보기
       즉, 해당 요소의 기존 text 콘텐츠를 새 값으로 대입
    */
   calcResult.innerText = value1 + value2;
}

/** 빼기 함수 */
function minusFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    calcResult.innerText = value1 - value2; 
}

/** 곱하기 함수 */
function multiFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    calcResult.innerText = value1 * value2;
}

/** 나누기 함수 */
function divFn(){
    calcResult.innerText = Number(input1.value) / Number(input2.value);
}

/** 나머지 함수 */
function modFn(){
    calcResult.innerText = Number(input1.value) % Number(input2.value);
}

/* =============================================== */
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const calcResult2 = document.getElementById("calcResult2");

/** 첫 번째 값 x2 */
function doubleFn(){
    const val = Number(input3.value);
    calcResult2.innerText = val * 2;
}

/** 두 번째 값 제곱 */
function squareFn(){
    const val = Number(input4.value);
    calcResult2.innerText = val * val;
}

/** 모든 산술 결과 일괄 출력 */
function allOperationFn(){
    const v1 = Number(input3.value);
    const v2 = Number(input4.value);

    // 각각의 연산 결과를 별도의 변수에 따로 저장
    const plus = v1 + v2;
    const minus = v1 - v2;
    const multi = v1 * v2;
    const div = v1 / v2;
    const mod = v1 % v2;

    calcResult2.innerHTML =
        "<ul>"
        + "<li> + 결과: " + plus + "</li>"
        + "<li> - 결과: " + minus + "</li>"
        + "<li> * 결과: " + multi + "</li>"
        + "<li> / 결과: " + div + "</li>"
        + "<li> % 결과: " + mod + "</li>"
        "</ul>"
}

/* ============================================== */
const countResult = document.getElementById("countResult");

/** 증감 연산자를 이용해 1씩 증가하는 함수 */
function increase(){
    let count = Number(countResult.innerText);
    countResult.innerText = ++count;
}

/** 증감 연산자를 이용해 1씩 감소하는 함수 */
function decrease(){
    let count = Number(countResult.innerText);
    countResult.innerText = --count;
}

/** 전위, 후위 연산자 확인 */
function checkFn(){
    let num = 100;
    console.log("++num: ", ++num); // 101
    console.log("++num: ", ++num); // 102
    console.log("++num: ", ++num); // 103

    num = 100;
    console.log("num++: ", num++); // 100
    console.log("num++: ", num++); // 101
    console.log("num++: ", num++); // 102

    // 문제
    let a = 10;
    let b = 5;
    let c = ++a * b--;
    /* 최종 a, b, c의 값은?
      a = 11, b = 4, c = 55
    */
}


