// 변수 선언
var number1;
var number2;

// 변수에 값 대입
number1 = 10;
number2 = 20;

/** var */
function varCheck(){
    var menu = "제육볶음";
    console.log("menu: ", menu);

    // 값 변경(ver 키워드X)
    menu = "라면";
    console.log("menu: ", menu);

    // 변수명 중복 확인(var 키워드!)
    var menu ="김밥";
    console.log("menu: ", menu);
}

/** let */
function letCheck(){
    let name = "홍길동";
    console.log("name: ",name);

    // 값 변경(let 키워드x)
    name = "장보고";
    console.log("name: ", name);

    // 변수명 중복 확인(let 키워드)
    // let name = "이순신"; // ** 오류 발생!!**
    // 블록 범위 변수 'name'을(를) 다시 선언할 수 없습니다.

    // 해결 방법 : 다른 이름의 변수에 저장
    let name2 = "이순신";
    console.log("name2:", name2);
}


/** const */
function constCheck(){
    const nationalCode = 82;

    console.log("nationalCode: ", nationalCode);

    /* 상수(값 변경X) */
    // Assignment to constant variable. -> 상수에 값을 대입(오류)
    // nationalCode = 1;
    // console.log("nationCode: ", nationalCode);

    /* 변수명 중복X */
    //const nationalCode = 1;
}

/* var, let, const의 범위(scope) 확인*/
function scopeTest1() // 함수 선언
{// 함수 정의 시작

    var num1 = 100;
    if(num1 === 100){
        var num2 = 200;
        /* var는 함수 레벨 범위
          - var는 함수 정의 시작 ~ 끝 사이에 존재하면 어디서든 사용 가능
          - 즉, 함수 종료 직전까지 사용 가능
        */
    }
    console.log("num2: ", num2); // num2:  200

    /* let */
    let num3 = 300;
    if(num3 === 300){
        let num4 = 400;
        /* let은 블록{} 레벨 범위
          - let은 블록{} 내부에서만 사용 가능!
          - 블록{}을 벗어나면 "사용 불가!!"
        */
       console.log("첫 번째 if: ", num4); // 첫 번째 if:  400
    }

    /* 다른 블럭에서 같은 이름의 변수를 사용 가능? Yes */
    if(num3 === 300){
        let num4 = 999;
        console.log("두 번째 if: ", num4); // 두 번째 if:  999
    }
    // console.log("num4: ", num4);
    // num4 is not defined (nim4 변수가 정의되지 않음(없음))

}// 함수 정의 끝

// 전역 변수 선언(기본적으로 {}블록 밖에서 선언)
const global1 = "전역 변수1";

function scopeTest2() // 함수 선언
{// 함수 정의 시작

    const fn1 = "함수 지역 변수1";
    let fn2 = "함수 지역 변수2";
    const temp = 123; // 임시 변수

    console.log("if 실행전 fn2: ", fn2); // if 실행전 fn2:  함수 지역 변수2

    if(temp === 123)
    {
        console.log("if 내부에서 fn2: ", fn2); // if 내부에서 fn2:  함수 지역 변수2

        console.log("전역 변수 global1: ", global1); // 전역 변수 global1:  전역 변수1
        
        /* {} 바깥쪽 변수 값을
           {} 내부에서 변경하면 어떤일이 발생할까? */
           fn2 = "변경된 fn2";
           console.log("fn2 변경 확인: ", fn2); // fn2 변경 확인:  변경된 fn2
    }
    console.log("if 끝난 이후 fn2 값: ", fn2); // if 끝난 이후 fn2 값:  변경된 fn2

}// 함수 정의 끝


/** 자료형 확인 */
function typeCheck(){
    let undef
    console.log("undef: ", undef, typeof undef); // undef:  undefined undefined

    const name = "정승원";
    const phone = '01012341234';
    console.log("name: ", name, typeof name); // name:  정승원 string
    console.log("phone: ", phone, typeof phone); // phone:  01012341234 string

    const age = 36;
    const height = 192.6;
    const sight = -4.5;
    console.log("age: ", age, typeof age); // age:  36 number
    console.log("height: ", height, typeof height); // height:  192.6 number
    console.log("sight: ", sight, typeof sight); // sight:  -4.5 number

    const bool1 = true;
    const bool2 = false;
    console.log("bool1: ", bool1, typeof bool1); // bool1:  true boolean
    console.log("bool2: ", bool2, typeof bool2); // bool2:  false boolean
    
    // 배열(Array) : 변수의 묶음
    //               묶인 변수에 0부터 1씩 증가하는 숫자를 부여(index)
    const numbers = [11,22,33];
    console.log("numbers: ",numbers, typeof numbers); // numbers: [11, 22, 33] object
    console.log("numbers[0]: ", numbers[0], typeof numbers[0]); // numbers[0]:  11 number
    console.log("numbers[1]: ", numbers[1], typeof numbers[1]); // numbers[1]:  22 number
    console.log("numbers[2]: ", numbers[2], typeof numbers[2]); // numbers[2]:  33 number

    // JS객체 {k:v, k:v, k:v}
    // k(key) == 값을 구분하는 이름(변수명과 비슷)
    // v(value) == 값 자체(변수에 대입되는 값)
    const user = {
        id:"user01",
        pw:"pass01",
        point: 13000
    }
    console.log("user: ",user, typeof user); // user: {id: 'user01', pw: 'pass01', point: 13000} object
    console.log("user['id']: ", user['id'], typeof user['id']); // user['id']:  user01 string
    console.log("user['pw']: ", user['pw'], typeof user['pw']); // user['pw']:  pass01 string
    console.log("user['point']: ", user['point'], typeof user['point']); // user['point']:  13000 number

    /* 함수도 변수에 대입 가능!!! */
    const sumFn = function(a,b){
        return a+b;
    }
    console.log("sumFn: ", sumFn, typeof sumFn);
    /* sumFn:  ƒ (a,b){
        return a+b;
    } function */

    console.log(sumFn(-81.5,977.2)); // 895.7
}

