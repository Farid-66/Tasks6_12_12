let radius=document.querySelector("#radius");
let volume=document.querySelector("#volume");
let btn=document.querySelector("#btn");
let p=document.getElementById("pp");

btn.addEventListener("click",function(e){
    e.preventDefault();
    volume.value=(4/3)*Math.PI*Math.pow(parseInt(radius.value),3);
});