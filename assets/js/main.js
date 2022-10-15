document.querySelector('.main').addEventListener("mousemove", (e) => {
   let main = document.querySelector('.main');
   main.style.backgroundPositionX = (-e.offsetX)/100 + "px";
   main.style.backgroundPositionY = (-e.offsetY)/100 + "px";
});