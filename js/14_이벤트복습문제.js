const colorInputs = document.querySelectorAll(".color-input");
const boxes = document.querySelectorAll(".box");
const radioBtns = document.querySelectorAll("[name=opacity-btn");

// 각 input에 이벤트 리스너 추가
for(let i = 0; i<colorInputs.length; i++){
    colorInputs[i].addEventListener("keyup", function(){
        boxes[i].style.backgroundColor = colorInputs[i].value;
    });
};

// 라디오 버튼의 값이 변했을 때를 감지
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



