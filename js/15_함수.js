/* 전달 인자, 매개 변수 확인 */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

/** 전달 받은 값이 양수/음수/0인지 판별
 * @param num : 전달 받은 숫자
 */
function testFn(num){
    let str = "";
    if(num === 0){
        str = "0";
    }else if(num>0){
        str = "양수";
    }else{
        str = "음수";
    }
    alert(`${num}은/는 ${str}입니다.`)
}
// #btn1이 클릭 되었을 때
btn1.addEventListener("click", function(){
    const val = Number(input1.value);

    // 함수 호출(입력 값 전달)
    testFn(val);
});

/** 전달 받은 배열 내 요소의 합 출력하기
 * @param arr : unmber만 저장된 1차원 배열
 */
function sumArr(arr){
    let sum=0;
    for(let num of arr){
        // arr 배열애 저장된 요소를 0번 부터
        // 순서대로 하나씩 꺼내 num에 저장
        sum += num;        
    }
    alert(`합계 : ${sum}`);
}
// 합계 구하기
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function(){

    // const는 {}레벨 범위이기에 전역 변수로 쓰면 나중에 못쓰기에 안에!
    const inputs = document.querySelectorAll("[name = input2]");

    // input에 작성된 값을 얻어와 배열 하나 생성
    const arr = []; // 빈 배열

    for(let input of inputs){
        // 향상된 for문은 인덱스를 알 수 없음
        arr.push(Number(input.value));
    }

    sumArr(arr);
});

/** 배수 확인 함수
 * @param a : 비교(기준)되는 수(큰수)
 * @param b : 확인해야되는 수(작은수)
 */
function multipleFn(a,b){
    let str = "";

    if(a % b === 0){
        str = "맞습니다";
    }else{
        str = "아닙니다"
    }
    alert(`${a}은/는 ${b}의 배수가 ${str}.`)
    /* 콘솔에 확인 multipleFn(15,3)*/
};
const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", function(){
    /* const inputs = document.querySelectorAll("[name=input3]"); // name의 공백 제거
    const arr = [];

    for(let input of inputs){
        arr.push(Number(input.value));  // input의 value를 가져와야 함
    }
    multipleFn(arr); */

    const inputs = document.querySelectorAll("[name=input3]");
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);
    multipleFn(a,b);
});

/** return1 확인
 * num의 x제곱 값을 반환하는 함수
 * @param num : 곱해질 정수
 * @paran x : 지수
 * @return : num의 x제곱
 */
function pow(num, x){
    // 곱셈, 나눗셈 시 영향 없는 수 === 1
    let result = 1;

    for(let i=0; i<x; i++){
        result *= num;
    }
    return result; // 함수 종료 + 호출한 곳으로 result를 가지고 돌아감
    // 브라우저 콘솔 확인 pow(2,5)
};

function createStr(num,x,result){
    return `${num}의 ${x}제곱은 ${result} 입니다.`
}

// 버튼 클릭 시 prompt를 이용해서 정수, 지수 입력 받아 결과 출력
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function(){
    const num = Number(prompt("정수 입력"));
    const x = Number(prompt("지수 입력"));

    // 함수가 여러개가 있으면 제일 안에 있는 것 부터 시작
    alert(createStr(num,x,pow(num,x))); 
});

/** return 확인2
 * prompt에 입력된 값을 숫자 배열로 바꿔서 반환하는 함수
 * @param num : 입력 받을 수의 개수
 * @return arr : 입력 받은 수가 저장된 배열
 */
function createArray(num){
    const arr = [];

    for(let i=0; i<num; i++){
        const val = Number(prompt(`${i}번째 인덱스에 대입할 숫자`));
        arr.push(val); // 배열 마지막 요소로 val 추가
    };

    return arr;
};

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function(){

    const arr = createArray(5); // 생성된 배열을 반환 받아 저장

    // 합계 출력 함수 호출(함수 재사용)
    sumArr(arr);
});

/* 함수를 반환하는 함수 */
function createCounter(){
    let count = 0;
    const fn = function(){ /* 함수를 변수에 저장 */
        count++;
        return count;
    };
    // 콘솔에 테스트
    // console.log(fn()); // 1
    // console.log(fn()); // 2
    // console.log(fn()); // 3

    return fn; // 함수 반환
    // 콘솔에 입력 => createCounter()
}

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function(){
    // createCounter() 호출 시 반환 값:
    // function(){ /* 함수를 변수에 저장 */
    //    count++;
    //    return count;
    // } 
    // 반환된 함수를 counter에 저장(함수명 === counter)
    const counter = createCounter();

    console.log(counter()); // 1
    console.log(counter()); // 2
    console.log(counter()); // 3
    console.log(counter()); // 4
    console.log(counter()); // 5
});


/* 매개 변수/return으로 익명 함수 전달 하기 */
btn7.addEventListener("click", function(){ /* function(){} 이게 익명 함수 */

    const resultFn = testFn7(function(a,b){ return a+b; }); /* 이런 모양의 함수를 testFn7 에 전달 */

    console.log("resultFn(3) : ", resultFn(3));

});

function testFn7(otherFn){ // 위의 익명함수가 otherFn 변수에 전달이 됨

    return function(num){
        return otherFn(10,20)*num;
    }
};

/* 화살표 함수 */
const arrow = document.querySelectorAll(".arrow");
// 화살표 함수 기본 형태
arrow[0].addEventListener("click", ()=> {
    // 이 익명함수를 sumFn이라 부름
    const sumFn = (a,b,c) => {
        return a + b + c;
    };
    alert(sumFn(12345,6789,111314));
});

// 매개 변수가 1개인 경우
arrow[1].addEventListener("click", () => {
    const square = num => { // () 생략
        return num * num;
    };
    alert(square(9));
});

// {} 내 코드가 1줄만 작성된 경우
arrow[2].addEventListener("click", () => {
    const print = str => console.log(str); // (), {} 생략 가능
    print("안녕하세요?");

    const doubleFn = num => num * 2; // (), return, {} 생략 가능
    print(doubleFn(3)); // 6
});

// object 타입을 return 하는 경우
arrow[3].addEventListener("click", () => {

    // 배열 반환(배열은 {}, return생략 가능!!)
    const fn1 = () => [1,2,3];
    console.log(fn1());

    // * {k:v, k:v} === JS 객체

    // 객체 반환(return, {} 생략 시 구문 오류 발생!!)
    const fn2 = () => { return {name:"홍길동", age:20}};
    console.log(fn2());
});

/* function(){}의 this 확인 */
document.querySelector("#btn8").addEventListener("click", function(){
    console.log(this);
});

/* () => {}의 this 확인 */
document.querySelector("#btn9").addEventListener("click", () => {
    console.log(this);
});


/* 즉시 실행 함수 확인 */
const str = "A";

console.log(str); // A

(function(){
    const str = "B"; // {} 내 지역 변수

    console.log(str); // B
})(); /* 콘솔창에 확인 => 바로 뜸 */
