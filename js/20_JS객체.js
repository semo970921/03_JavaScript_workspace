/* JS 객체 생성 + 다루기 */

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    // 1. 객체 생성
    // 1) {} - JS 객체 리터럴을 이용한 생성
    const product = {

        "productName" : "새우깡", // const productName="새우깡";
        'brand' : '농심',
        price : 1700 // Key를 String타입으로 안썼지만 무조건 String
    };

    console.log("product : ", product);

    // 2) new Object() - 새 객체 생성 === {}
    const person = new Object();
    console.log("person : ", person);

    /* 객체 내부에 값을 추가 */
    // 1) 객체명.key = value;
    person.name = "철수";
    person.age = "22";

    // 2) 객체명["key"] = value;
    person["height"] = 178.9;
    person["weight"] = 73;  

    /* 생성된 객체 내부 값 얻어오기 */
    // 1) 객체명.key
    console.log(product.productName);
    console.log(product.price);
    console.log(product.brand);

    // 2) 객체명["key"]
    console.log(product["productName"]);
    console.log(product["price"]);
    console.log(product["brand"]);

    /* 객체에 저장된 값 수정 */
    product.price = 1500;
    person["age"] = 23;
    console.log("수정된 product : ",product);
    console.log("수정된 person : ", person);

    /* 객체에 저장된 값 삭제 */
    delete person.weight;
    console.log("삭제 확인 : ", person);
});

/* JS 객체에 메서드(함수) 추가 */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {

    const student = {}; // 빈 객체 생성

    // 점 연산자
    student.name = "홍길동";
    student.age = 20;

    // student에 메서드 추가
    student.introduce = function(){
        const gender = "남자"; // block scope

        // 저는 20세 남자 홍길동 입니다.
        //alert(`저는 ${age}세 ${gender} ${name} 입니다.`); 
        // age is not defined(age 변수가 안보인다)
        alert(`저는 ${this.age}세 ${gender} ${this.name} 입니다.`);
        // gender는 힘수 내에 있기에 this x
    };
    // student의 introduce() 메서드 호출
    student.introduce();

    // 다른 메서드 추가
    student.study = function(subject){
        const str = `${this.name}은 ${subject}을/를 공부합니다.`;
        console.log(str);
    };
    // student의 study 메서드 호출
    student.study("수학");
    student["study"]("코딩");
});


/* 학생 기록부 */
/**
학생 생성자 함수 정의
 * @param grade : 전달 받은 학년
 * @param ban : 전달 받은 반
 * @param number : 전달 받은 번호
 * @param name : 전달 받은 이름
 */

// 생성자 함수
function Student(grade, ban, number, name){
    this.grade = grade;
    this.ban = ban;
    this.number = number;
    this.name = name;

    // 메서드(객체의 함수)
    this.inform = function(){
        let str
            = `${this.grade}학년 ${this.ban}반 ${this.number}번 ${this.name}`;
        return str; // inform을 호출하면 이 str을 반환하는 함수

        // 콘솔에 테스트
        // const s1 = new Student(1,2,3,"김영희");
        // s1
        // s1.grade
        // s1.inform()
    };
};

/* -------------------------------------- */
// 객체 배열
const studentList = [
    new Student(1,1,1,"고현우"), // 0번 index
    new Student(1,1,2,"김관민"),
    new Student(1,1,3,"김구남")

    // 콘솔에 studentList
];

/* 학생 추가 버튼 클릭 시 입력된 값을 모두 얻어와
학생 객체 배열(studentList)에 추가하기 */
const inputGrade = document.querySelector("#inputGrade");
const inputBan = document.querySelector("#inputBan");
const inputNumber = document.querySelector("#inputNumber");
const inputName = document.querySelector("#inputName");

const addStudent = document.querySelector("#addStudent");

addStudent.addEventListener("click", () => {

    // 입력된 값 모두 얻어오기 -> value이용!!
    const values = [
        inputGrade.value,
        inputBan.value,
        inputNumber.value,
        inputName.value
    ];

    // 입력되지 않은 값이 있는지 확인
    for(let val of values){
        if(val === ''){// 입력을 안 한 경우
            alert("모든 값을 입력 해주세요.");
            return;    
        }
    }

    // 학생 객체 생성(생성자 함수 이용)
    const std = new Student(
        // 다 바꾸는 법 : alt + shift + 시작커서 + 마지막 커서
        Number(values[0]),
        Number(values[1]),
        Number(values[2]),
        values[3]);

        // 생성된 학생 객체를
        // 학생 객체 배열 studentList의 제일 마지막으로 추가
        studentList.push(std); // 배열.push(값) : 배열 마지막 요소로 추가

        // 추가 완료 후 input에 작성된 값 모두 제거
        inputGrade.value = "";
        inputBan.value = "";
        inputNumber.value = "";
        inputName.value = "";

        inputGrade.focus(); // 초점 맞추기

        // 콘솔에 studentList
});

/* ----------------------------------------- */
/* 학생 조회 버튼 클릭시
studentList에 저장된 모든 내용을
#tbody에 요소를 만들어 출력 
*/
const selectStudent = document.querySelector("#selectStudent");
const tbody = document.querySelector("#tbody");

selectStudent.addEventListener("click", () => { //조회 버튼 클릭 되었을 때
    tbody.innerHTML = "";

    // 요소 생성 + innerText 함수
    const createEl = (tag, text) => { //어떤 태그명? 어떤 텍스트 넣을건데?
        const el = document.createElement(tag); // 요소 생성
        el.innerText = text; // 내용 추가
        return el; // 만들어진 요소 반환
    };

    studentList.forEach( (std,index) => {
        
        const tr = document.createElement("tr");

        // 하나하나 만들면 복잡 => 위 함수 이용
        const th = createEl("th", index+1); // 위 함수에서 만들어진 th 요소가 들어옴
        const td1 = createEl("td", std.name);
        const td2 = createEl("td", std.grade);
        const td3 = createEl("td", std.ban);
        const td4 = createEl("td", std.number);

        // tr 조립
        tr.append(th, td1, td2, td3, td4);

        // tbody에 tr 추가
        tbody.append(tr);

        // 이름이 작성된 요소(td1)가 클릭 되었을 때
        td1.addEventListener("click", () => {
            // alert("111");
            alert(std.inform()); // inform 메서드 반환 결과 alert 출력
        });
    });

    // #total에 인원 수 추가
    document.querySelector("#total").innerText 
     = `${studentList.length}명`;
});


/* JSON 확인 */
const checkJson = document.querySelector("#checkJson");
checkJson.addEventListener("click", () => {

    // JS 객체 생성
    const user = {
        "id" : "user01",
        "pw" : "pass01",
        "email" : "user01@naver.com",
        "phone" : "010-1234-1234"
    };

    console.log("user : ", user, typeof user); // 객체 배열

    console.log("JSON.stringify(user) : ",
        JSON.stringify(user),
        typeof JSON.stringify(user)
    ); // 콘솔에서 위 JS 객체와 비교

    // JSON을 직접 작성
    const menu = '{"name" : "김밥", "price" : 4000}';
    console.log("menu : ", menu, typeof menu);

    console.log(JSON.parse(menu), typeof JSON.parse(menu));

});