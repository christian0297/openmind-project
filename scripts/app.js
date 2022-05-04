
//---------- --------close banner-----------
document.querySelector(".banner-close").addEventListener("click", ()=>{
    document.querySelector(".banner").style.display = "none";
    //document.querySelector(".banner").remove();
    //vedere quale dei due è migliore dopo aver visto lezione sul caching
});


// accordion
const accordion = document.getElementsByClassName("accordion");


for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}






//-------------------slider for small devices-----------------







// const sliderContainer = document.querySelector(".slider-container");
    // const slider = document.querySelector(".slider");
    
    // let pressed =false;
    // let xStart;
    // let x;
    
    // //release the mouse click on the slider
    // sliderContainer.addEventListener("mouseup", ()=>{
    //     sliderContainer.style.cursor = "grab";
    // });
    
    // //mouse click on the slider. mouse click on the slider. 
    // //Get the position of the mouse on the x-axis
    // sliderContainer.addEventListener("mousedown", e =>{
    //     pressed = true;
    //     xStart = e.offsetX - slider.offsetLeft;
    //     sliderContainer.style.cursor = "grabbing";
    // });
    
    // window.addEventListener("mouseup", ()=>{
    //     pressed = false;
    // });
    
    // sliderContainer.addEventListener("mousemove", e =>{
    //     if(pressed){
    //         e.preventDefault();
    //         x=e.offsetX;
    //         slider.style.left = `${x -xStart}px`;
    //         checkSize()
    //     }
    // });
    
    // function checkSize(){
    //     let sliderContainerOut = sliderContainer.getBoundingClientRect();
    //     let sliderIn = slider.getBoundingClientRect();
    
    //     if(parseInt(sliderIn.style.left) > 0)
    //         sliderIn.style.left = "0px";
    //         else if(sliderIn.right < sliderContainerOut.right){
    //             sliderIn.style.left = `${sliderIn.width - sliderContainerOut.width}px`
    //         }
    // } 
