let btn =document.getElementsByClassName("ticket__buy-btn")
let price = document.getElementById("price")


if(JSON.parse(localStorage.getItem('arr')===null)){
    localStorage.setItem("arr",JSON.stringify([]))
}
else{
   let arr =JSON.parse(localStorage.getItem("arr"))
}

btn.addEventListener('click',(e)=>{
    let arr =JSON.parse(localStorage.getItem("arr"))
    localStorage.setItem("arr", JSON.stringify([...arr, inp.value]))

})