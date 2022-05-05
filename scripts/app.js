
//-------------------------close banner------------------------------------
document.querySelector(".banner-close").addEventListener("click", ()=>{
    document.querySelector(".banner").style.display = "none";
    //document.querySelector(".banner").remove();
    //vedere quale dei due è migliore dopo aver visto lezione sul caching
});

//-------------------------accordion----------------------------------
const accordion = document.getElementsByClassName("accordion");
for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}


//-------------------slider for small devices-----------------





