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

/** 다음 모양 출력하기 */
function check17(){
    for(let row=1; row<=3; row++){ // 3번 출력
        let result="";
        for(let col=1; col<=4; col++){
            result += col; // 문자열 + 숫자 === 이어쓰기
        }
        console.log(result);
        console.log("----")
    }
}

/** 다음 모양 출력하기 */
function check18(){

    for(let row = 1; row <= 4; row++){ // 4번 출력
        let result = "";
        for(let col = 1; col <= 5; col++){
            result += col;
        }
        console.log(result);
        console.log("-----");
    }
}

/** 다음 모양 출력하기 */
function check19(){

    for(let row=1; row<=3; row++){// (let row = 3; row >= 1; row--)
        let result = "";
        for(let col=6; col>=1; col--){
            result += col;
        }
        console.log(result);
        console.log("======");
    }
}

/** 다음 모양 출력하기 
 *  1
    12
    123
    1234
    12345
 * 
*/
function check20() {
    
    // row == 1,2,3,4,5
    for(let row = 1; row <= 5; row++){
        let result = "";

        // row 만큼 반복
        for(let col = 1; col <= row; col++){
            result += col;
        }
        console.log(result);
    }
}

/** 다음 모양 출력하기 
 *  3
    34
    345
    3456
    34567
* 
*/
function check21(){

    for(let row=1; row<=5; row++){
        let result = "";

        for(let col=1; col<= row; col++){
            result += col+2;
        }
        console.log(result);
    }

    // 다른 방법
    for(let row=3; row<=7; row++){
        let result = "";
        for(let col=3; col<=row;col++){
            result += col;
        }
        console.log(result);
    }
}

/** 다음 모양 출력하기  */
function check22(){
    for(let row = 1; row <= 3; row++){
        let result = "";

        for(let col = 1; col <= row; col++){
            
            result += '*';
        }
        console.log(result);
    }
}

/** 입력 받은 숫자 만큼의 * 모양 삼각형 출력하기
 *  <pre>
        입력 : 5
        *
        **
        ***
        ****
        *****
    </pre>
 */
function check23(){
    const input = document.getElementById("input23");

    if(input.value.length === 0){
        alert("숫자를 입력해주세요");
        return;
    }

    const val = Number(input.value);

    // 입력된 숫자가 0이하일 경우
    if(val <= 0){
        alert("0보다 큰 수를 입력하세요");
        return;
    }

    for(let row = 1; row <= val; row++){
        let result = "";

        for(let col = 1; col <= row; col++){
            result += '*';
        }
        console.log(result);
    }
}

/** 다음 모양 출력하기
 *      ****
        ***
        **
        *
 */
function check24(){
    for(let row=4; row>=1; row--){
        let result = "";
        for(let col=1; col<=row; col++){
            result += '*';
        }
        console.log(result);
    }

    for(let row=1; row<=4; row++){
        let result = "";
        for(let col=1; col<=5-row; col++){
            result += '*';
        }
        console.log(result);
    }
}

/** 1부터 30 사이의 정수 중 4의 배수는 몇개? */
// 4 8 12 16 20 24 28 : 7개
function check25(){
    
    let count = 0;

    for(let num=1; num<=30; num++){
        if(num%4 === 0){
            count++;
        }
    }
    console.log("몇개? ",count);
}

/** 1부터 100사이의 정수 중 입력 받은 값의 배수는 몇개? */
function check26(){
    // 정상 입력되었다고 가정
    const input = Number(document.getElementById("input26").value);

    let count = 0;
    for(let num=1; num<=100; num++){
        if(num%input === 0){
            count++;
        }
    }
    console.log(`1~100 사이 ${input}의 배수는 ${count}개 있습니다.`);
}

/** count를 이용해 숫자 부여하기
 *      1 2 3 4
        5 6 7 8
        9 10 11 12
 */
function check27(){
    let count = 1; // 1부터 시작

    for(let row=1; row<=3; row++){
        let str = "";
        for(let col=1; col<=4; col++){
            //str += `${count} `; // count + " ";
            // count++; // 1증가

            str += `${count++}` // 후위 연산(제일 마지막에 증가)            
        }
        console.log(str); // str(한 행) 출력
    }
    // count는 for문 밖에 있으므로 다시 초기화x
}

/** prompt를 이용해서 입력 받은 숫자 모두 더하기 */
// 단, 취소 클릭 시 종료
// 누적된 합계를alert로 출력
function check28(){
    let sum = 0; // 합계 누적용 변수

    let val; // prompt에 입력된 값을 저장할 변수

    while((val = prompt("숫자 입력(취소 클릭 시 종료")) !== null){ // prompt에 넣은 숫자를 담을 변수가 필요
        sum += Number(val) // prompt에 입력된것도 다 string
    }
    alert(`합계: ${sum}`);
}

/** 메뉴 주문하기 */
function check29(){

    // 메뉴 가격을 상수로 선언
    const gimbap = 4000;
    const ramen = 4500;
    const donkkaseu = 9000;

    // 메뉴별 주문 개수를 저장할 카운트 변수 선언
    let gCount = 0;
    let rCount = 0;
    let dCount = 0;    

    // prompt에 저장된 값을 저장할 변수 선언
    let input; // undefined

    // input 변수에 저장된 값이 null이 아닐 경우 반복
    // (undefined랑 null은 다름!)  
    while(input !== null){

        //prompt에 반환되는 값 종류 :
        // "1", "2", "3", 메뉴없는 숫자(잘못된 입력), null(취소)
        input = prompt("메뉴 번호 입력(1.김밥 2.라면 3.돈까스)");

        switch(input){
            case "1" : gCount++; break; // 김밥 주문 개수 중가
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문 완료!"); break;
            default : alert("잘못 입력 하셨습니다.")
        }
    }

    // innerHTML 사용 필요
    // 주문된 메뉴만 출력(count 변수에 저장된 값이 0초과인 것만)

    let outputHtml = ''; // 출력할 html 코드가 포함된 문자열 저장

    if(gCount > 0){ // 김밥을 주문한 경우
        outputHtml += `<li>김밥(${gCount}개) : ${gimbap * gCount} 원</li>`
    }

    if(rCount > 0){ // 라면을 주문한 경우
        outputHtml += `<li>라면(${rCount}개) : ${ramen * rCount} 원</li>`
    }

    if(dCount > 0){ // 돈까스를 주문한 경우
        outputHtml += `<li>돈까스(${dCount}개) : ${donkkaseu * dCount} 원</li>`
    }

    // 합계
    const sum = (gimbap * gCount) + (ramen * rCount) + (donkkaseu * dCount);

    outputHtml += `<li>합계 : ${sum}원</li>`

    // #result29의 내용으로 outputHtml 출력(HTML 요소 해석)
    document.getElementById("result29").innerHTML = outputHtml;
}