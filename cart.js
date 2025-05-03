let btns = document.querySelectorAll(".btn");
let cc = document.querySelector(".cc");
let plus = document.querySelector(".plus");

let count = 0;

// btn[0].addEventListener("click",()=>{
//     // cc.classList.add("showafter");
//     count++;
//     plus.textContent = `+${count}`;
//     plus.style.visibility = "visible";
// })

btns.forEach((e)=>{
    e.addEventListener("click", ()=>{
        count++;
            plus.textContent = `+${count}`;
            plus.style.visibility = "visible"; 
    })
})