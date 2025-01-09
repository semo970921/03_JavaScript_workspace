/** class를 이용한 요소(DOM객체) 접근 방법 */
function classTest(){
    const divs = document.getElementsByClassName("cls-test");
    
    for(let i=0; i<divs.length; i++){

        // HTML 요소 안에 들어 있는 텍스트 내용 가져와서 콘솔에 출력
        /*
        <div class="cls-test">red</div>
        이 경우, divs[0].innerText는 "red"를 반환
        */
        console.log(divs[i].innerText);

        divs[i].style.backgroundColor = divs[i].innerText;
    }
}

/** 배경색 초기화(흰색) */
function classInit(){
    const divs = document.getElementsByClassName("cls-test");

    for(let i=0; i<divs.length; i++){
        divs[i].style.backgroundColor = "white";
    }
}

/** input에 입력된 숫자를 모두 얻어와 합계 구하기 */
function classTest2(){
    const inputs = document.getElementsByClassName("cls-input");

    let sum = 0;

    for(let i=0; i<inputs.length; i++){
        // 각 요소(input)에 작성된 값을 얻어와
        // Number 타입으로 변환하여 sum에 누적
        sum += Number(inputs[i].value); // input 태그는 종료태그 없기에 value
    }

    document.getElementById("sumResult").innerText = sum;
}

/** 태그명으로 요소 접근하여 배경색 변경하기 */
function tagNameTest(){
    const lists = document.getElementsByTagName("li");

/* rgb(r, g, b) : 빛의 삼원색을 섞어서 색상을 생성
                  r, g, b의 범위는 0~255
*/

    for(let i=0; i<lists.length; i++){
        lists[i].style.backgroundColor = `rgb(200, 0, ${30*i})`;
    }
}

/** 취미 선택하기 */
function nameTest(){

    // name 속성 값이 "hobby"인 요소만 모두 얻어오기
    const hobbyList = document.getElementsByName("hobby");

    let content = ''; // 화면에 출력할 내용을 누적할 변수
    let count = 0;    // 체크된 체크박스의 개수를 세기위한 변수

    for(let i=0; i<hobbyList.length; i++){

        /* 체크박스의 value 속성 값 얻어와 출력하기
        console.log(hobbyList[i].value); 
         => 이렇게 하면 체크 안 된것도 다 가져오게 됨
        */

        // 체크박스.checked -> 체크 여부를 true/false로 반환
        // console.log(hobbyList[i].checked); 확인

        if(hobbyList[i].checked === true){
            console.log(hobbyList[i].value);
            count++;
            content += hobbyList[i].value + " "; // 내용 누적 
        }
    }
    content += `<br><br>선택된 취미 개수 : ${count}`;

    // 클래스가 "name-result"인 요소 중 0번째 요소에 내용으로 출력
    // -> "name-result"가 1개 밖에 없으므로 0번 인덱스만 선택

    // 콘솔에 document.getElementsByClassName("name-result") 하면 유사배열 나오고
    // 요소는 하나 들어가있어

    const div = document.getElementsByClassName("name-result")[0];

    // 내부에 내용 작성(HTML 코드를 해석해라)
    div.innerHTML = content;
}

/** CSS 선택자를 이용한 요소 접근 */
function cssTest(){
    // target-div 속성 값이 css-div인 요소 하나 선택
    const container = document.querySelector("[target-div=css-div]");

    // 요소가 얻어져 왔는지 콘솔로 확인
    console.log(container);

    // JS에서 CSS Style 추가
    container.style.width = "200px";
    container.style.height = "200px";
    container.style.border = "10px solid orange";

    // document.querySelector("css 선택자");
    // => 여러 요소가 선택된 경우 "첫 번째" 요소만 얻어옴
    const first = document.querySelector("[target-div=css-div] > div");

    // 첫 번째만 선택 되었는지 확인
    console.log(first);
    first.style.color = "red";
    first.style.fontsize = "30px";

    // document.querySelectorAll("css 선택자");
    // -> 모든 요소를 선택해서 (유사)배열 형태로 반환
    const divs = document.querySelectorAll("[target-div=css-div] > div");
    console.log(divs);

    const colors = ['yellow', 'pink']; //배열 선언 및 초기화
    for(let i=0; i<divs.length; i++){
        divs[i].style.height = "50%";
        divs[i].style.display = "flex";
        divs[i].style.justifyContent = "center"; // 중심축 방향 가운데
        divs[i].style. alignItems = "center"; // 교차축 방향 가운데
        divs[i].style.backgroundColor = colors[i];
    }
}


/** 카카오톡 모양의 채팅 만들기 */
function readValue(){

    /* 채팅이 출력 되는 화면(배경) 요소 선택 */
    const bg = document.querySelector("#chattingBg");

    /* 입력되는 채팅 내용 input 요소 선택 */
    const input = document.querySelector("#userInput");

    // 1) 입력된 값이 없을 경우
    // - 아무 값도 입력 X
    // - 작성된 내용이 공백 문자(띄어쓰기, 탭, 엔터)만 있을 경우

    // * 문자열.trim() : 문자열 좌우 공백을 제거
    // 콘솔에 "         a      b          c   ".trim()
    // "     ".trim().length

    if(input.value.trim().length === 0){
        alert("채팅 내용을 입력 해주세요.");

        input.value = ""; // 입력된 공백을 모두 제거

        input.focus(); // input 요소에 초점을 맞춤 => 확인 누르고 다 지워지고 다시 커서 깜빡깜빡
        
        return;
    }

    /* 입력된 값을 읽어와 채팅 화면에 누적 */
    bg.innerHTML += `<p><span>${input.value}</span></p>`; 

    // 채팅 화면 출력 후 입력 값 제거
    input.value = "";

    //input 요소에 focus 유지
    input.focus();

    /* 채팅 화면의 스크롤을 제일 아래로 이동 */
    // 요소.scrollHeight
    //  -> 스크롤 되어 가려진 부분까지 포함한 요소 전체 높이

    // 요소.scrollTop
    //  -> 스크롤 제일 위에서 부터 현재 위치


    // 요소.scrollTop = "값"
    //  -> 스크롤을 위에서 지정된 값 만큼 떨어진 위치로 이동

    // 스크롤을 제일 아래로 이동
    bg.scrollTop = bg.scrollHeight;
}

// #userInput인 요소에 "Enter" 키가 입력 경우 채팅 추가
document.querySelector("#userInput")
    .addEventListener("keydown", function(e){

        // 입력된 키를 콘솔에 출력
        // console.log(e.key);

        if(e.key === "Enter"){
            readValue(); // 함수 호출
        }

    });
