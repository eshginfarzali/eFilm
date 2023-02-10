let btn =document.getElementsByClassName("ticket__buy-btn")
let price = document.getElementById("price")
let store = document.getElementById("store")
let basket=document.getElementById("basket")
let count=document.getElementById("count")

basket.addEventListener("click",()=>{
    store.style.display === "none" ?
        store.style.display = "flex":
        store.style.display = "none"
})


if(JSON.parse(localStorage.getItem('cartsCount'))===null){
    localStorage.setItem('basket',JSON.stringify([]))
}

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',()=>{
        cartCount()

    })
    
}

function cartCount(){
   let prdCount= localStorage.getItem("cartsCount");
    prdCount=parseInt(prdCount);
    if(prdCount){
        localStorage.setItem('cartsCount', prdCount+1)
        count.textContent=prdCount+1;
    }else{
        localStorage.setItem('cartsCount',1);
        count.textContent=prdCount=1;

    }
}

function displayCart(){
    let prdCount=localStorage.getItem('cartsCount');
    if(prdCount){
        count.textContent=prdCount;
    }
}
displayCart();