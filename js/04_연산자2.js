/** 비교 연산자 확인 */
function check1(){
    const num1 = 100; // number type
    const num2 = 100;
    const num3 = 999;
    const str1 = "100"; // string type 
    const str2 = "100"; 
    const str3 = "999"; 

    console.log("1. 동등 비교(==, !=)");

    console.log("num1 == num2 : ", num1 == num2) // true
    console.log("num1 == num3 : ", num1 == num3) // false
    console.log("num1 != num3 : ", num1 != num3) // true

    // number, string 동등 비교
    console.log("num1 == str1 : ", num1 == str1); // true

    // string 끼리 비교
    console.log("str1 == str2 : ", str1 == str2); // true 
    console.log("str1 == str3 : ", str1 == str3); // false
    
    console.log("2. 동일 비교(===, !==)");

    // 숫자 끼리 값 비교
    console.log("num1 === num2 : ", num1 === num2); // true
    console.log("num1 === num3 : ", num1 === num3); // false
    console.log("num1 !== num3 : ", num1 !== num3); // true

    // number, string 동일 비교
    console.log("num1 === str1 : ", num1 === str1); // false

    // 초과, 미만, 이상, 이하
    console.log("num1 > num2 : ", num1 > num2); // false
    console.log("num1 >= num2 : ", num1 >= num2); // true
}

/** 홀짝 판별기 */
function oddEvenCheck(){
    const input1 = document.getElementById("input1");

    // #iput1에 작성된 값 얻어와 number 타입으로 변환해 변수 저장
    const val = Number(input1.value);

    // 짝수 == 2의 배수 == 2로 나눴을 때 나머지가 0인 수
    // 홀수 == 2의 배수 -1 또는 +1 == 2로 나눴을 때 나머지가 1인 수
    console.log("짝수 맞음? " + (val % 2 === 0));
    console.log("홀수 맞음? " + (val % 2 === 1));    
}

/** 배수 판별기 */
function multipleCheck(){
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const result2 = document.getElementById("result2");

    const v1 = Number(input2.value);
    const v2 = Number(input3.value);

    result2.innerText = (v1%v2 === 0);
}

/** 복합 대입 연산 확인 */
function compoundCheck(){
    let num = 100;

    console.log(`num 초기값 : ${num}`) // 100

    num += 20; // num = num + 20
    console.log(`num += 20 : ${num}`); // 120

    num -= 60; // num = num - 60
    console.log(`num -= 60 : ${num}`); // 60

    num *= 3; // num = num * 3
    console.log(`num *= 3 : ${num}`); // 180

    num /= 10; // num = num / 10
    console.log(`num /= 10 : ${num}`); // 18

    num %= 5; // num = num % 5
    console.log(`num %= 10 : ${num}`); // 3    
}

/**AND 연산자 확인 */
function andCheck(){

    // 104는 100 이상의 숫자 이면서 짝수인가?
    const bool1 = (104 >= 100) && (104 % 2 === 0); 
    console.log(`104는 100 이상의 숫자 이면서 짝수인가? ${bool1}`); // true

    // 50은 70 이하의 숫자이고, 4의 배수가 맞는가?
    const bool2 = (50 <= 70) && (50 % 4 === 0);
    console.log(`50은 70 이하의 숫자이고, 4의 배수가 맞는가? ${bool2}`); // false

    // 13은 1부터 10 사이의 숫자가 맞는가?
    const bool3 = (1 <= 13) && (13 <= 10);
    console.log(`13은 1부터 10 사이의 숫자가 맞는가? ${bool3}`); // false
}

/**OR 연산자 확인 */
function orCheck(){

    // 4는 10을 초과하거나 짝수인가?
    const bool1 = (4 > 10) || (4 % 2 === 0);
    console.log(`결과 1: ${bool1}`); // true

    // 나이가 18세 미만 이거나, 이름이 "홍길동" 인가?
    const age = 20;
    const name = "홍길동";
    const bool2 = (age < 18) || (name === "홍길동");
    console.log(`결과 2: ${bool2}`); // true

    // 국어 또는 영어 점수가 40점 미만이거나
    // 평균이 60점 미만인가?
    const kor = 50;
    const eng = 75;
    const bool3 = ((kor < 40) || (eng < 40)) || ((kor + eng) / 2 < 60);
    console.log(`결과 3 : ${bool3}`); // false
}