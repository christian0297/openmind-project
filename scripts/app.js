
//-------------------------close banner------------------------------------
document.querySelector(".banner-close").addEventListener("click", ()=>{
    document.querySelector(".banner").style.display = "none";
    //document.querySelector(".banner").remove();

    sessionStorage.setItem("banner", "closeBanner" );
});


//--------------------session storage banner--------------------------

if(sessionStorage.getItem('banner') ===  "closeBanner")
    document.querySelector(".banner").style.display = "none";



//-------------------------accordions------------------------------
const accordion = document.getElementsByClassName("accordion");
for(i=0; i<accordion.length; i++){
    accordion[i].children[0].addEventListener("click", function() {
            this.parentElement.classList.toggle("active");
    });
}

//-------------------slider for small devices "on Desktop"-----------------


    const slider = document.getElementById('slider');
    slider.style.cursor = 'grab';

    let pos = { left: 0, x: 0 };

    //quando clicchiamo con il mouse sullo slider
    slider.addEventListener("mousedown", function (e) {
        slider.style.cursor = 'grabbing';
        slider.style.userSelect = 'none';

        pos = {
            left: slider.scrollLeft, // indica di quanti pixel ci siamo spostati da sinistra
            x: e.clientX, // posizione attuale del mouse
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    //quando muoviamo il mouse
    function mouseMoveHandler(e) {
        const dx = e.clientX - pos.x;  // indica di quanto è stato spostato il mouse
        slider.scrollLeft = pos.left - dx; // "Scrolla" l'elemento
    };

    //quando rilasciamo il tasto del mouse
    function mouseUpHandler() {
        slider.style.cursor = 'grab';
        slider.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };



    // ---------------------load the modal when the dom is loaded------------------------
    document.addEventListener("DOMContentLoaded", function(){
        MicroModal.init();
    });


    // -----------------insert the input already present in that of the modal-----------
    document.querySelector(".send-email").addEventListener("click", function(){
        document.getElementById("email-modal").value = document.getElementById("email").value;
    });
   