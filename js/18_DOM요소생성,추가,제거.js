// 기준이 되는 box
const standard = document.getElementById("standard");
const btns = document.querySelectorAll(".btn");

// 요소 내용
let count = 1;

for(let btn of btns){
    btn.addEventListener("click", (e) => {

        const str = e.target.innerText;
        console.log(str);

        switch(str){
            case "prepend" : 
                const span1 = document.createElement("span");
                const text1 = document.createTextNode(count);
                span1.appendChild(text1);
                span1.style.backgroundColor = "skyblue";
                standard.prepend(span1);

            break;


            case "append" :
                const span2 = document.createElement("span");
                const text2 = document.createTextNode(count);
                span2.appendChild(text2);
                span2.style.backgroundColor = "lightsalmon";
                standard.append(span2);
            break;

            case "before" :
                const div1 = document.createElement("div");
                div1.className = "box";
                div1.style.backgroundColor = "orange";
                div1.innerText = count;
                standard.before(div1);
            break;

            case "after" :
                const div2 = document.createElement("div");
                div2.className = "box";
                div2.style.backgroundColor = "springgreen";
                div2.innerText = count;
                standard.after(div2);

            break;

            case "remove":
                const boxes = document.querySelectorAll(".box:not(#standard)")
                const spans = document.querySelectorAll("#standard > span");
                for(let box of boxes){
                    box.remove();
                }

                for(let span of spans){
                    span.remove();
                }

                count = 0

            break;
        } // switch end

        count++; // count 1 증가  // 개발자도구 보면서 확인           

    });
};

