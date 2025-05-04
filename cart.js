let btns = document.querySelectorAll(".btn");
let cc = document.querySelector(".cc");
let plus = document.querySelector(".plus");
let cart_img = document.querySelectorAll(".cart-img");
let item = document.querySelectorAll(".item");
let cdes = document.querySelectorAll(".cdes");
let ides = document.querySelectorAll(".ides");
let rup = document.querySelectorAll(".rup");
let iprice = document.querySelectorAll(".iprice");
let inc = document.querySelectorAll(".inc");
let dec = document.querySelectorAll(".dec");
let no = document.querySelectorAll(".no");

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

// btns[1].addEventListener("click", ()=>{
//    cart_img[1].src = item[1].src;
//    cdes[1].textContent = ides[1].textContent;
//    rup[1].textContent = iprice[1].textContent;
//    no[1].textContent = count;
// })

dec.forEach(e => {
    e.addEventListener("click", ()=>{
        if(count > 0){
           count--;
           plus.textContent = `+${count}`;
        }
    })
});

inc.forEach(e => {
    e.addEventListener("click", ()=>{
        count++;
        plus.textContent = `+${count}`;
    })
});