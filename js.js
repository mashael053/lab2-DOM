
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let button = document.getElementById("butCh");
let butRE = document.getElementById("butRE");
let divTest = document.getElementById("divTest");

button.addEventListener("click", function myfun() {
  let a = input1.value;
  let b = input2.value;
  let c = input3.value;
  let d = input4.value;
  divTest.style.cssText = `height: ${a}; width: ${b}; background-color: ${c}; border-radius: ${d};`;
});


butRE.addEventListener("click", function myfun() {
    divTest.style.cssText =  ` background-color: rgb(77, 77, 173); 
    border-radius: 5%;
    height: 20%;
    width: 20%;`

  });

  