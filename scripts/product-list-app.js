//----------------management of buttons for the view of the grid----------------
const productsContainer = document.querySelector(".products-container");

document.querySelector(".view-grid-small").addEventListener("click", function(){
    if(!this.classList.contains("active-view")){
        this.classList.add("active-view");
        this.style.color = "#000";
        const gridLarge = document.querySelector(".view-grid-large");
        gridLarge.children[0].style.fill = "#6B6B6B";
        gridLarge.classList.remove("active-view");

        productsContainer.classList.add("small");
        productsContainer.classList.remove("large");
    }
});

document.querySelector(".view-grid-large").addEventListener("click", function(){
    if(!this.classList.contains("active-view")){
        this.classList.add("active-view");
        this.children[0].style.fill = "#000";
        const gridSmall = document.querySelector(".view-grid-small");
        gridSmall.style.color = "#6B6B6B";
        gridSmall.classList.remove("active-view");

        productsContainer.classList.add("large");
        productsContainer.classList.remove("small");
    }
});


//-----------------insertion of products inside the grid---------------
const containerProducts = document.querySelector(".products-container");
let productItem, clonedNode;

for(i=1; i<16; i++){
    productItem = document.querySelector(".product-item");
    clonedNode = productItem.cloneNode(true);
    containerProducts.appendChild(clonedNode);
}


//------------------------favorite product----------------------
const buttonHeart = document.getElementsByClassName("btn-heart");

for(i=0; i<buttonHeart.length; i++){
    buttonHeart[i].addEventListener("click", function() {
        this.classList.toggle("favorite");
        //tenere traccia dei preferiti a ogni refresh di pagina (?)
    });
}

  
