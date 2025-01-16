/* Node 탐색 확인 */
const checkBtn1 = document.querySelector("#checkBtn1");

checkBtn1.addEventListener("click", () => {
    const test1 = document.querySelector("#test1");

    const list = test1.childNodes;
    console.log("list : ", list);

    // 원하는 자식 노드 선택
    console.log("첫 번째 li 태그 : ", list[3]);

    const li1 = document.querySelector("#li1");
    const parent = li1.parentNode;
    console.log("parent : ", parent);

    console.log("firstChild : ",parent.firstChild);
    console.log("lastChild : ",parent.lastChild);

    // list[9]의 다음, 다음 형제 노드 탐색
    console.log(list[9].nextSibling.nextSibling); // list[11]

    // list[5]의 이전, 이전 형제 노드 탐색
    console.log(list[5].previousSibling.previousSibling); // list[3]

    // <a hredf="#">4번</a> 글자색 red로 변경하기
    parent.lastChild.childNodes[1].style.color = "red";
    
});

/* Element 탐색 */
const checkBtn2 = document.querySelector("#checkBtn2");

checkBtn2.addEventListener("click",() => {

    const li2 = document.querySelector("#li2");

    const parent = li2.parentElement;
    console.log("parent : ", parent); // ul

    console.log("children : ", parent.children);

    console.log("firstElementChild : ", parent.firstsElementChild);
    console.log("lastElementChild : ", parent.lastElementChild);

    console.log(parent.children[1].previosElementSibling)
    console.log(parent.children[1].nextElementSibling);
})