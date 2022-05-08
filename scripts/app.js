
//-------------------------close banner------------------------------------
document.querySelector(".banner-close").addEventListener("click", ()=>{
    document.querySelector(".banner").style.display = "none";
    //document.querySelector(".banner").remove();
    //vedere quale dei due è migliore dopo aver visto lezione sul caching (?)
});

//-------------------------accordion footer------------------------------
const accordion = document.getElementsByClassName("accordion");
for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}

//-------------------slider for small devices-----------------

/* const mediaQuery = window.matchMedia('(max-width: 920px)');
 mediaQuery.addEventListener('change', function (e) {});
 Da usare per eliminare il puntatore grab per pagine superiori a 920.
 risolvere: se rimpicciolisco e allargo a pagina raddoppia le mediaQuery
*/

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
    const mouseMoveHandler = function (e) {
        const dx = e.clientX - pos.x;  // indica di quanto è stato spostato il mouse
        slider.scrollLeft = pos.left - dx; // "Scrolla" l'elemento
        console.log(pos.left + "  -  " +  dx + " = "+ slider.scrollLeft);
    };

    //quando rilasciamo il tasto del mouse
    const mouseUpHandler = function () {
        slider.style.cursor = 'grab';
        slider.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

