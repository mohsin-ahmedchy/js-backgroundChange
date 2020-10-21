let btn = document.querySelector(".btn");
let bodyBc = document.querySelector("body");




btn.addEventListener("click", () =>{

        let random = `hsl(${Math.floor(Math.random()*360)}, 100%, 60%)`;
        bodyBc.style.backgroundColor = random;

}) 
