
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


/* const mediaQuery = window.matchMedia('(max-width: 920px)');
 mediaQuery.addEventListener('change', function (e) {});
 Da usare per eliminare il puntatore grab per pagine superiori a 920.
 risolvere: se rimpicciolisco e allargo a pagina raddoppia le mediaQuery
*/

    const ele = document.getElementById('slider');
    ele.style.cursor = 'grab';

    let pos = { left: 0, x: 0 };

    
    ele.addEventListener("mousedown", function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            // Get the current mouse position
            x: e.clientX,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;

        // Scroll the element
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

