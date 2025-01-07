/** 콘솔에 12345 출력하기 */
function check1(){
    for(let number=1; number<=5; number++){
        console.log(number);
    }
}

/** 콘솔에 1부터 10까지 1씩 증가하며 출력하기 */
function check2(){
    for(let num=1; num<=10; num++){
        console.log(num);
    }
}

/** 콘솔에 5부터 13까지 1씩 증가하며 출력하기 */
function check3(){
    for(let num=5; num<=13; num++){
        console.log(num);
    }
}

/** 1부터 7까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check4(){
    let result = ""; // 결과를 저장할 변수에 ""(빈칸) 대입
    for(let num=1; num<8; num++){
        result+=num;
        /* 
        문자열 + 숫자 = 문자열
        "" + 1 = "1"
        "1" + 2 = "12"
        "12" + 3 = "123"
        */
    }
    console.log(result);
}

/** 4부터 11까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check5(){
    let result = "";
    /* 
    result에 ""(빈칸)을 대입하는 이유
    -> 변수 선언 시 아무런 값 대입하지 않으면? => undefined(콘솔에 직접)
    => undefined는 산술 연산의 대상이 될 수 없음!!!
        => 산술 연산을 수행하면 NaN(Not a Number)결과가 반환됨
    */
    for(let num=4; num<=11; num++){
        result += num;
    }
    console.log(result);
}

/** 1부터 10까지 1씩 증가한 숫자의 합 구하기 */
function check6(){
    let sum = 0;
    for(let num=1; num<=10; num++){
        sum += num;
    }
    console.log(sum);
}

/** 입력 받은 값 사이 정수 값들의 합 구하기 */
function check7(){

    // 모든 값 입력 되어있고
    // 입력 1이 입력 2보다 작다고 가정

    const a = Number(document.getElementById("input7a").value);
    const b = Number(document.getElementById("input7b").value);

    let sum = 0;
    for(let num=a; num<=b; num++){
        sum += num;
    }
    console.log(`${a} 부터 ${b} 사이 정수 합 : ${sum}`);
}

/** 1부터 10까지 2씩 증가한 숫자 출력 + 합계 구하기 */
function check8(){
    let sum = 0;
    for(let num=1; num<=10; num+=2){
        console.log(num);
        sum += num;
    }
    console.log("합계 : ", sum);
}

/** 3부터 30까지 3의 배수만 한 줄로 출력하기 */
function check9(){
    // 방법1) 증감식을 변경하는 방법
    let result = "";
    for(let num=3; num<=30; num+=3){
        result += num + " ";
    }
    console.log(result);

    // ------------------------------

    // 방법2) for문 + if문
    let result2 = ""
    for(let num=3; num<=30; num++){
        if(num%3 === 0){
            result2 += num + " ";
        }
    }
    console.log(result2);
}

/** 입력 받은 범위 내 지정된 수의 배수를 한 줄로 출력하고, 합계 구하기 */
function check10(){
    const start = Number(document.getElementById("start10").value);
    const end = Number(document.getElementById("end10").value);
    const multiple = Number(document.getElementById("multiple10").value);

    let result = "";
    let sum = 0;

    for(let num=start; num<=end; num++){
        if(num%multiple === 0){
            result += num + " ";
            sum += num;
        }
    }
    console.log(result);
    console.log("합계 : ", sum);
}

/** 구구단 2단 출력하기 */
function check11(){
    for(let num = 1; num <= 9; num++){
        console.log(`2 x ${num} = ${2*num}`);
    }
}

/** 입력 받은 단의 구구단 출력하기 */
function check12(){
    const dan = document.getElementById("dan12");
    if(dan.value.length === 0){
        alert("단을 입력 해주세요");
        return;
    }

    const val = Number(dan.value);
    if(val<2 || val>9){
        alert("2 ~ 9단 사이만 입력 해주세요");
        return;
    }

    for(let num=1; num<=9; num++){
        console.log(`${val} x ${num} = ${val*num}`);
    }
}

/** 10부터 1까지 1씩 감소하며 출력하기 */
function check13(){
    for(let num=10; num>=1; num--){
        console.log(num);
    }
}

/** 20부터 3까지 3씩 감소하며 출력하기 */
function check14(){
    for(let num=20; num>=3; num-=3){
        console.log(num);
    }
}

/** 구구단 3단 거꾸로 출력하기 */
function check15(){
    for(let num=9; num>=1; num--){
        console.log(`3 x ${num} = ${3*num}`);
    }
}

/** 5의 배수마다 @, 10의 배수마다 줄바꿈하면서 출력하기(1~30) */
function check16(){
    let result = "";
    for(let num=1; num <= 30; num++){

        if(num % 5 === 0){ // 5의 배수
            result += "@";
        }else{ // 5의 배수가 아닌 경우
            result += num + " ";
        }

        // 10의 배수마다 줄바꿈 (따로 생각해야되는 조건)
        if(num % 10 === 0){
            result += "<br>" // 줄바꿈 태그 추가
        }
        
    }
    document.getElementById("result16").innerHTML = result;

    console.log(result);
}
