/* ================================================ */
/* ver2 */

const colorInputs = document.querySelectorAll(".color-input");
const boxes = document.querySelectorAll(".box");

for(let input of colorInputs ){
    // input === colorInputs[i], i는 0~끝까지 1씩 증가

    input,addEventListener("keyup", () => {

        // 입력된 input의 이전 형태(div.box)의 배경색 변경
        input.previousElementSibling.style.backgroundColor
             = input.value;
    })
}


for(let i=0; i<radioBtns.length; i++){
    radioBtns[i].addEventListener("change", function(e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);

        for(let box of boxes){
            box.style.opacity = e.target.value;
        };
    });
};

