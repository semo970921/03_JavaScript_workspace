/* 변수 선언 : 값을 저장하기 위한 공간 생성 */
var number1;
var number2;

/* 변수에 값 대입 : 생성된 공간에 원하는 값을 넣기 */
/* 변수명 = 값; -> 오른쪽 "값"을 왼쪽 변수에 대입 */
number1 = 10;
number2 = 20; /* 콘솔창 확인 */

// var : 변수(값 변경 O), 변수명 중복 O, 함수 레벨 범위
function varCheck(){
    var menu = "제육볶음";
    console.log("menu: ", menu);

    // 값 변경
    menu = "라면";
    console.log("menu: ", menu);

    // 변수명 중복
    var menu = "구내 식당";
    console.log("menu: ", menu);

    // var 사용의 문제점
    // 잘 사용하고 있던 변수를 실수로 없애는 경우가 자꾸 발생
    // 즉, 위에 라면 넣은 변수 사라짐
}

// let : 변수(값 변경 O), 변수명 중복 X, 블록{} 레벨 범위
function letCheck(){
    let name = "홍길동";
    console.log("name: ", name);

    // 값 변경
    name = "장보고";
    console.log("name: ", name);

    // 변수명 중복X
    /*let name = "이순신";
    블록 범위 변수 'name'을(를) 다시 선언할 수 없습니다.*/

    // 해결 방법 : 다른 이름의 변수에 저장
    let name2 = "이순신";
    console.log("name2: ", name2);
}

//const : 상수(값 변경 X), 변수명 중복 X, 블록{} 레벨 범위
function constCheck(){
    const nationalCode = 82;
    console.log("nationalCode: ", nationalCode);

    /* 상수(값 변경X) */
    // Assignment to constant variable. -> 상수에 값을 대입(오류)
    // nationalCode = 1;
    // console.log("nationCode: ", nationalCode);

    // 변수명 중복 X
    // const nationalCode = 1;
}


/* var, let, const의 범위(scope) 확인 */
function scopeTest1() // 함수 선언
{ // 함수 정의 시작
    //* var */
    var num1 = 100;

    if(num1 === 100){
        var num2 = 200;

        /* var는 함수 레벨 범위
        var는 함수 정의 시작 ~ 끝 사이에 존재하면
        어디서든 사용 가능
        즉, 함수 종료 직전까지 사용 가능 
        */
    }

    console.log("num2: ", num2);

    // ---------------------------------------------------

    /* let */
    let num3 = 300;

    if(num3 === 300){
        let num4 = 400;

        console.log("첫번째 if: ", num4);

        /* let은 블록 레벨 범위
        let은 {} 블록 내부에서만 사용 가능
        {} 블록을 벗어나면 "사용불가"!!
        */

    }
    console.log("if문 밖: ", num3);

    if(num3 === 300){
        let num4 = 999;
        console.log("두번째 if: ", num4);
    }


    /* console.log("num4: ", num4);
    num4 is not defined (nim4 변수가 정의되지 않음(없음)) */

} // 함수 정의 끝

// 전역 변수 선언 (기본적으로 {} 블록 밖에서 선언)
const global1 = "전역 변수1"; // 전역변수이기에 콘솔창에 그냥 치면 나옴

function scopeTest2()
{
    const fn1 = "함수 지역 변수1";
    let   fn2 = "함수 지역 변수2";

    const temp = 123; // 임시 변수

    console.log("if 실행전 fn2: ", fn2); // 함수 지역 변수2

    if(temp === 123) // if문 선언
    { // if문 정의 시작

        // 바깥쪽 -> 안쪽 변수 사용 가능!!
        console.log("if 내부에서 fn2: ", fn2); // 함수 지역 변수2

        // 바깥쪽 -> 안쪽 변수 사용 가능!!
        console.log("전역 변수 global1: ", global1); // 전역 변수1

        /* {} 바깥쪽 변수 값을
           {} 내부에서 변경히면 어떤일이 발생할까? */
        fn2 = "변경된 fn2";
        console.log("fn2 변경 확인: ", fn2); // 변경된 fn2

    } // if문 정의 끝

    console.log("if 끝난 이후 fn2 값: ", fn2); // 변경된 fn2

    const name = "홍길동";
    console.log("if 전: ", name);
    if(temp === 123){
        // {} 바깥쪽, 안쪽 변수명이 같으면 {} 안쪽이 우선순위가 높음
        const name = "김미영";
        console.log("if 중: ", name);
    }
    console.log("if 후 : ", name); 

}


/* 자료형 확인 */
function typeCheck(){

    /* typeof 연산자 : 변수/값의 자료형을 확인하는 연산자
    콘솔창에 typeof123, typeof"123" */

    /* undefined : 정의되지 않음 == 변수에 값 대입X */
    let undef;
    console.log("undef: ", undef, typeof undef);

    /* String(문자열): "", '' 형태로 작성된 리터럴(값)*/
    const name = "성기훈";
    const phone = '01012341234';

    console.log("name: ", name, typeof name);
    console.log("phone: ", phone, typeof phone);

    /* number(숫자) : 정수, 실수 형태의 리터럴 */
    const age = 36;
    const height = 192.3;
    const sight = -4.5;

    console.log("age: ", age, typeof age);
    console.log("height: ", height, typeof height);
    console.log("sight: ", sight, typeof sight);


    /* boolean(논리값) : true(참), false(거짓) */
    const bool1 = true;
    const bool2 = false;
    console.log("bool1: ", bool1, typeof bool1);
    console.log("bool2: ", bool2, typeof bool2);

    /* Object(객체) : 값을 여러 개 저장할 수 있는 형태 */
    /* 1) 배열 (Array) : 변수의 묶음,
                        묶인 변수에 0부터 1씩 증가하는 숫자를 부여(index) */
    const numbers = [11, 22, 33]; // 배열 생성

    // 배열 전체 타입 검사
    console.log("numbers: ", numbers, typeof numbers);

    // 배열 내 요소(저장된 값) 하나씩 꺼내기
    console.log("numbers[0]: ", numbers[0], typeof numbers[0]);
    console.log("numbers[1]: ", numbers[1], typeof numbers[1]);
    console.log("numbers[2]: ", numbers[2], typeof numbers[2]);


    /* 2) JS 객체 {k:v, k:v, k:v}
        k(key) == 값을 구분하는 이름(변수명과 비슷)
        v(value) == 값 자체(변수에 대입되는 값) */
    const user = {
        id: "user01",
        pw: "pass01",
        point: 13000
    }

    console.log("user: ", user, typeof user);

    // js 객체 내 요소 하나씩 꺼내기
    console.log("user['id']: ", user['id'], typeof user['id']);
    console.log("user['pw']: ", user['pw'], typeof user['pw']);
    console.log("user['point']: ", user['point'], typeof user['point']);

    /* 함수(function) : 함수도 변수에 대입 가능!! */
    // sumFn == 함수명
    const sumFn = function(a,b){
        return a + b;
    }

    console.log("sumFn: ", sumFn, typeof sumFn);

    // sumFn(호출) -> () 내 값 전달 -> 계산 결과 return -> console 출력
    console.log(sumFn(111,987));
    console.log(sumFn(-81.5,977.2));
}