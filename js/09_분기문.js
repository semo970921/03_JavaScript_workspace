/** break 확인 */
function check1(){
    const stopNumber
        = Number(prompt("1~20 사이 멈추고 싶은 숫자를 입력"));

    for(let num=1; num<= 20; num++){
        console.log(num);

        if(num == stopNumber){
            break;
        }
    }
}

/** 무한 반복 멈추기1 */
function check2(){

    let num = 1;

    while(true){

        if(num === 100){ // 99까지 출력후 멈춤
            break;    
        }

        console.log(num);

        num++;
    }
}

/** 무한 반복 멈추기2 */
// prompt에 취소가 입력 될 때 까지 숫자를 입력 받아
// 합계 구하기
function check3(){

    let sum = 0;

    while(true){
        const value = prompt("숫자 입력(취소 시 종료)");

        // prompt 취소 클릭 === null
        if(value === null){
            break;
        }
        // if 수행 x === 확인 클릭
        sum += Number(value);
    }

    alert(`합계 : ${sum}`);
}

/** 중첩 반복문에서 break 사용(분기문 작용 범위) */
function check4(){

    for(let row=1; row<=3; row++){

        let result = "";
        for(let col=1; col<=5; col++){

            result += col;

            if(col === 4){ // 안쪽 for문에 적용
                break;    
            }
        }
        console.log(result);
        console.log("----");

        if(row === 2){ // 바깥쪽 for문에 적용
            break; 
        }
    }
}

/** continue 확인하기 */
// 1부터 20까지 1씩 증가하는 반복문을 이용해서 숫자 출력
// 단, 3과 5의 배수는 건너뛰기
// 1 2 4 7 8 11 13 14 16 17 19
function check5(){
    for(let num=1; num<=20; num++){

        if(num%3 ===0 || num%5 === 0){
            continue;
        }
        console.log(num);
    }
}

/** continue 확인하기2 */
/* 
    - 123456789를 5줄 출력
    단, 1번 줄 출력 시 1 제외
        2번 줄 출력 시 2 제외
        3번 줄 출력 시 3 제외
        4번 줄 출력 시 4 제외
        5번 줄 출력 시 5 제외

        => 23456789
           13456789
           12456789
           12356789
           12346789
           12345789
           12345689
           12345679
           12345678
    (continue 이용)
*/
function check6(){
   for(let row=1; row<=9; row++){
    let result = "";
    for(let col=1; col<=9; col++){

        if(col === row){
            continue;
        }

        result += col;
    }

    console.log(result);
   }

   console.log("-------------------");

   // for문 하나로~
   // "문자열".replace("검색어", "바꿀단어")
   // -> 문자열 내에 검색어를 찾아서 "바꿀단어"로 변경
   for(let num=1; num<=9; num++){
       let str = "123456789";

       /* 
       콘솔창
       "123456789".replace('1','')
       */

       // num과 일치하는 숫자를 str에서 찾아서 ''으로 변경
       str = str.replace(num,''); 
       console.log(str);   

   }
}