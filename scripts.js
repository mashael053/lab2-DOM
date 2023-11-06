let stopButton1 = document.getElementById("stopButton")
let stopLight2 =document.getElementById("stopLight")
stopButton1.addEventListener("click"  , function myfun(){
    stopLight2.style.backgroundColor= "green";
    goLight2.style.backgroundColor= "black";
    slowLight.style.backgroundColor= "black";

    
})

let goLight2 = document.getElementById("goLight")
let goButton1 = document.getElementById("goButton")
goButton1.addEventListener("click", function myGo(){
    goLight2.style.backgroundColor= "yellow";
    stopLight2.style.backgroundColor= "black";
    slowLight.style.backgroundColor= "black";

})



let  slowButton= document.getElementById("slowButton")
let  slowLight= document.getElementById("slowLight")

slowButton.addEventListener("click", function myS(){
    slowLight.style.backgroundColor= "red";
    goLight2.style.backgroundColor= "black";
    stopLight2.style.backgroundColor= "black";

 } )



