let btns = document.querySelectorAll(".btn");
let cc = document.querySelector(".cc");
let plus = document.querySelector(".plus");
let cartitems = document.querySelectorAll(".cart-items")
let cart_img = document.querySelectorAll(".cart-img");
let item = document.querySelectorAll(".item");
let cdes = document.querySelectorAll(".cdes");
let ides = document.querySelectorAll(".ides");
let rup = document.querySelectorAll(".rup");
let iprice = document.querySelectorAll(".iprice");
let inc = document.querySelectorAll(".inc");
let dec = document.querySelectorAll(".dec");
let no = document.querySelectorAll(".no");


let scount = 0;

function spancount(change){
    scount = Math.max(0, scount + change);
    updateplus();
}


function updateplus(){
    plus.textContent = `+${scount}`;
    plus.style.visibility = scount > 0 ? "visible" : "hidden" ;
}


[...btns, ...inc].forEach((e)=>{
    e.addEventListener("click", ()=>{
        spancount(+1); 
    });
});


// For first item.

function updateprice(){
    let pricetext = iprice[0].textContent.replace(/[^\d.]/g, ""); //removes any symbols.
    let price = parseFloat(pricetext); //coverts it into number.
    rup[0].textContent = ` ₹ ${price * ncount}`;
};

let ncount = 0;

function updatencount(change){
    ncount = Math.max(0, ncount + change);
    no[0].textContent = ncount;
    if(ncount==0){cartitems[0].style.display = "none"}
    if(ncount>0){cartitems[0].style.display = "flex"}
    updateprice();
};

btns[0].addEventListener("click", ()=>{
   updatencount(+1)
   cart_img[0].src = item[0].src;
   cdes[0].textContent = ides[0].textContent;
});

inc[0].addEventListener("click", ()=>{
    updatencount(+1);
});

dec[0].addEventListener("click", ()=>{
    if(ncount>0){
    updatencount(-1);
    spancount(-1);
    };
});

// For second item

function updateprice1(){
    let pricetext = iprice[1].textContent.replace(/[^\d.]/g, ""); //removes any symbols.
    let price = parseFloat(pricetext); //coverts it into number.
    rup[1].textContent = ` ₹ ${price * ncount1}`;
};

let ncount1 = 0;

function updatencount1(change){
    ncount1 = Math.max(0, ncount1 + change);
    no[1].textContent = ncount1;
    if(ncount1>0){cartitems[1].style.display = "flex"}
    if(ncount1==0){cartitems[1].style.display = "none"}
    updateprice1();
};

btns[1].addEventListener("click", ()=>{
   updatencount1(+1);
   cart_img[1].src = item[1].src;
   cdes[1].textContent = ides[1].textContent;
});

inc[1].addEventListener("click", ()=>{
    updatencount1(+1);
});

dec[1].addEventListener("click", ()=>{
    if(ncount1>0){
    updatencount1(-1);
    spancount(-1);
    };
});


//  For third Item.

function updateprice2(){
    let pricetext = iprice[2].textContent.replace(/[^\d.]/g, ""); //removes any symbols.
    let price = parseFloat(pricetext); //coverts it into number.
    rup[2].textContent = ` ₹ ${price * ncount2}`;
};

let ncount2 = 0;

function updatencount2(change){
    ncount2 = Math.max(0, ncount2 + change);
    no[2].textContent = ncount2;
    if(ncount2>0){cartitems[2].style.display = "flex"}
    if(ncount2==0){cartitems[2].style.display = "none"}
    updateprice2();
};

btns[2].addEventListener("click", ()=>{
   updatencount2(+1);
   cart_img[2].src = item[2].src;
   cdes[2].textContent = ides[2].textContent;
});

inc[2].addEventListener("click", ()=>{
    updatencount2(+1);
});

dec[2].addEventListener("click", ()=>{
    if(ncount2>0){
    updatencount2(-1);    
    spancount(-1);
    };
});