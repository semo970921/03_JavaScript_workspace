function check1(){

    const arr1 = new Array(); // 0칸 배열 생성
    const arr2 = new Array(3); // 3칸 배열(요소 모두 비어있음)
    const arr3 = []; // 0킨 배열
    const arr4 = ['사과', '딸기', '바나나']; // 3칸 배열 + 초기화

    // 배열 확인
    console.log(arr1,arr2,arr3,arr4);

    // 배열 길이 확인
    console.log(arr1.length);
    console.log(arr2.length);
    console.log(arr3.length);
    console.log(arr4.length);

    // 배열의 각 요소 접근 방법 : 배열명[index]
    console.log(`arr4[0] : ${arr4[0]}`);
    console.log(`arr4[1] : ${arr4[1]}`);
    console.log(`arr4[2] : ${arr4[2]}`);

    // 존재하지 않는 index번째 요소 접근 -> 오류X
    console.log(`arr4[3] : ${arr4[3]}`); // undefined

    // 배열 요소에 값 대입 : 배열명[index번째] = 값;
    arr2[0] = 123;
    arr2[1] = "27일은 임시공휴일";
    arr2[2] = true;
    // (여러 자료형 저장 가능)

    // 존재하지 않는 index에 값 대입 -> 가능? 불가능?ㅣ
    // + 배열 길이가 자동으로 증가함

    arr2[3] = "가능?" // 3번 인덱스에 대입됨(확인완)
    arr2[6] = "건너뛰기도 가능?";
    // 6번 인덱스 대입됨(확인완)
    // + 건너뛴 4, 5번 인덱스가 비어있음 상태가 되어있음
    console.log("arr2 : ", arr2);
}

function check2(){

    const weeks = ['월','화','수','목','금','토','일'];

    for(let i=0; i<weeks.length; i++){
        console.log(weeks[i]);
    }

    console.log("-------");

    // 거꾸로 출력
    for(let i=weeks.length-1; i>=0; i--){
        console.log(weeks[i]);
    }
}

function check3(){
    /* prompt로 입력 받은 값을 배열 요소애 순차적으로 초기화 */

    const arr = []; // 0칸 짜리 배열 -> 값 대입 시 자동으로증가

    for(let i=0; i<4; i++){
        arr[i] = prompt(`${i}번째 요소에 저장할 값 입력`)
    }

    console.log(arr);
}

/**
 * prompt를 이용해 숫자 5개를 입력 받아 배열에 저장한 후
1) 저장된 값 출력
2) 합계 출력
3) 평균 출력
4) 짝수(0,2,4) 번째 index 요소의 합계 출력
5) 홀수(1,3)   번째 index 요소의 합계 출력
 */
function check4(){
    const arr = new Array(5); // 5칸 짜리 배열 생성

    for(let i=0; i<arr.length;i++){
        arr[i] = Number(prompt(`${i}번째 요소에 저장할 숫자 입력`));
    }
    // 1) 저장된 값 출력
    console.log(arr);

    // 2) 합계 출력
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(`합계 : ${sum}`);

    // 3) 평균 출력
    console.log(`평균 : ${sum/arr.length}`);

    // 4) 짝수(0,2,4) 번째 index 요소의 합계 출력
    // 5) 홀수(1,3)   번째 index 요소의 합계 출력
    let oddSum = 0; // 홀수 합계 저장할 변수
    let evenSum = 0; // 짝수 합계 저장할 변수
    for(let i=0; i<arr.length; i++){
        if(i%2 === 0){
            evenSum += arr[i];
        }else{
            oddSum += arr[i];
        }
    }
    console.log("짝수 합: ", evenSum);
    console.log("홀수 합: ", oddSum);
}

/** 배열 길이를 입력 받아 배열을 생성하고
 * 생성된 배열 각 요소에 0에서 배열 길이 미만의 난수를 저장 */
function check5(){
    const len = Number(prompt("생성할 배열 길이 입력"));

    const arr = new Array(len);

    for(let i=0; i<len; i++){
        const num = Math.floor(Math.random()*len);
        arr[i] = num;
    }
    console.log("결과: ", arr);
}

function selectMenu(){
    const menus = [
        "알탕", "마라탕", "순대국", "쌀국수",
        "닭갈비", "찜닭", "샐러드", "짬뽕",
        "라면", "김밥", "제육덮밥", "오므라이스",
        "햄버거", "고등어 구이", "삼겹살", "돈까스",
        "백반", "우육면", "곰탕"
    ]
    
    // 0이상 메뉴 개수 미만의 난수 1개 생성
    const num = Math.floor(Math.random()*menus.length);

    document.getElementById("menuResult").innerText = menus[num];
}

/** 로또 번호 생성기 */
function createLottoNumber(){

    // id가 lotto인 요소 얻어와 변수에 저장
    const lotto = document.getElementById("lotto");

    // 기존에 생성되어있는 번호 삭제(""빈칸으로 변경)
    lotto.innerHTML ="";

    /***배열에 중복되지 않는 난수 6개를 저장***/
    const arr = [];

    for(let i=0; i<6; i++){ 

        // 1 ~ 45 사이 난수 발생
        const num = Math.floor(Math.random() * 45+1);

        if(arr.includes(num)){
            i--; // 인덱스를 뒤로 갔다가 앞으로 오게함 === 제자리 유지
            continue; // 다음 반복으로 넘어감
        }

        // 중복되지 않는 난수인 경우 배열에 추가
        arr[i] = num;
    }

    // 배열 내 숫자 정렬(sort)
    arr.sort(function(a,b){return a-b;}); // 오름 차순 정렬

    console.log("arr : ", arr);

    // 화면에 로또 번호 순서대로 출력하기
    for(let i=0; i<arr.length; i++){
        lotto.innerHTML += `<div>${arr[i]}</div>`;
    }
}

/** 2차원 배열 확인1 */
function check6(){

    // 변수 선언
    const num1 = 10;
    const num2 = 20;
    const num3 = 30;

    // 1차원 배열 선언
    const arr1 = [num1, num2, num3];
    const arr2 = [40, 50, 60];
    const arr3 = [70, 80, 90];

    // 2차원 배열 선언
    const dArr1= [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];

    const dArr2 = [arr1, arr2, arr3]; // 1차원 배열의 묶음

    console.log("dArr1: ", dArr1);
    console.log("dArr2: ", dArr2);

    // ---------------------------------------------------

    // 2차원 배열에 인덱스를 이용해서 접근하기
    console.log("dArr2[0] : ", dArr2[0]);
    console.log("dArr2[0].length : ", dArr2[0].length);

    console.log("dArr2[1] : ", dArr2[1]);
    console.log("dArr2[1].length : ", dArr2[1].length);

    // 1차원 배열 내에 저장된 1차원 배열 요소의 개수
    console.log("dArr2[2] : ", dArr2[2]);
    console.log("dArr2[2].length : ", dArr2[2].length);

    // 2차원 배열 내에 저장된 1차원 배열 요소의 개수
    console.log("dArr2.length : ", dArr2.length);

    // dArr2의 0행 2열에 저장된 값 얻어오기
    console.log("dArr2[0][2] : ", dArr2[0][2]);

    // dArr2의 1행 1열에 저장된 값 얻어오기
    console.log("dArr2[1][1] : ", dArr2[1][1]);

    // dArr2의 2행 0열에 저장된 값 얻어오기
    console.log("dArr2[2][0] : ", dArr2[2][0]);


    /* 2차원 배열 인덱스를 이용해서 값 대입 */

    // 0행 0열, 1행 0열, 2행 0열 값을 *10 해서 대입
    dArr2[0][0] = dArr2[0][0] * 10;
    dArr2[1][0] *= 10; // 복합 대입 연산자
    dArr2[2][0] *= 10; // 복합 대입 연산자

    console.log(dArr2);

}

/** 2차원 배열 확인2 */
/* 
4행 4열 짜리 2차원 배열에 1 ~ 16 사이 난수 배치(중복X)
    1) 배열을 콘솔에 출력
    2) prompt를 이용해서 1 ~ 16 사이 숫자를 입력 받아
       2차원 배열 어디에 위치하는지 검색해서 출력하기
       (정상 입력 했다고 가정)
 */
function check7(){

    // 중복되지 않는 난수 16개를 저장한 1차원 배열 생성
    const randomArr = [];

    for(let i=0; i<16; i++){

        const num = Math.floor(Math.random() * 16+1); // 1~16사이의 난수

        if(randomArr.includes(num)){ // 중복이 있을 경우
            i--;
            continue;
        }

        // 중복X
        randomArr[i] = num;
    }

    console.log("randomArr: ", randomArr);

    // * 2중 for문을 이용해서 2차원 배열 모든 요소 접근하기

    let index = 0; // randomArr의 요소를 접근하기 위한 변수 선언

    const arr = []; // [[],[],[],[]] 만들겠다.

    for(let row=0; row<4; row++){ // 행 반복

        arr[row] = []; // 행 생성(1차원 배열)

        for(let col=0; col<4; col++){ // 열 반복
            // arr[row][col] = `(${row}, ${col})`; // 열에 데이터 추가(test)

            // randomArr 배열의 요소를 하나씩 꺼내서
            // arr[row][col]에 대입
            arr[row][col] = randomArr[index++]; // 후위연산 이용하여 index 증가
            // index++; // index를 1증가 시켜 randomArr 다음 요소 지정하기

        }
    }
    console.log(arr);

    // prompt를 이용해서 1 ~ 16 사이 숫자를 입력 받아
    // (정상 입력했다고 가정)
    const input = Number(prompt("1 ~ 16 사이 숫자 입력"));

    // 2차원 배열 어디에 위치하는지 검색해서 출력하기
    for(let row=0; row<arr.length; row++){ // 행 반복
        for(let col=0; col<arr[row].length; col++){ // 열 반복

            // arr[row][col]에 저장된 값과 입력 값(input)이 같을 때
            if(arr[row][col] === input){
                alert(`${input}은/는 (${row},${col})에 있습니다.`);
                return; // 값을 찾으면 함수를 종료(중복되는게 없기에 가능)
            }
        }
    }


}
