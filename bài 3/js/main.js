let num;
let dem=0;
let myNum = document.getElementById("myNumber");
myNum.addEventListener('keyup',()=>{
    return myNum.value;
})
let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    num=Math.floor(Math.random()*10) + 1; 
    dem++;
    if(myNum.value == num){
        alert("Chọn rồi");
    }
    else alert(`Sai rồi. Kết quả đúng là ${num}`);
    if(dem == 3){
        alert(`Game over`);
    }
})