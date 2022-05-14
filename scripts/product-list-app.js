//----------------management of buttons for the view of the grid----------------
const productsContainer = document.querySelector(".products-container");


//function for set small grid
function setSmallGrid(device){
        const gridLarge = document.querySelector(".view-grid-large");
        gridLarge.children[0].style.fill = "#6B6B6B";
        gridLarge.classList.remove("active-view");

        productsContainer.classList.add("small");
        productsContainer.classList.remove("large");


        const productsMedia = document.querySelectorAll(".product-media");
        productsMedia.forEach(productMedia =>{
            if(device==="desktop")
                productMedia.style.height = "400px";
            else
                productMedia.style.height = "187px";
            for(let i=0; i<productMedia.children.length; i++)
                 productMedia.children[i].style.display = "block";
        });

        const productsText = document.querySelectorAll(".product-text");
        productsText.forEach(productText =>{
            productText.style.display = "block";
        });
}

// the small grid is loaded when the relative icon is clicked
document.querySelector(".view-grid-small").addEventListener("click", function(){
    if(!this.classList.contains("active-view")){
        this.classList.add("active-view");
        this.style.color = "#000";
        
        setSmallGrid("desktop");

    }
});

// the large grid is loaded when the relative icon is clicked
document.querySelector(".view-grid-large").addEventListener("click", function(){
    if(!this.classList.contains("active-view")){
        this.classList.add("active-view");
        this.children[0].style.fill = "#000";
        const gridSmall = document.querySelector(".view-grid-small");
        gridSmall.style.color = "#6B6B6B";
        gridSmall.classList.remove("active-view");

        productsContainer.classList.add("large");
        productsContainer.classList.remove("small");

        const productsMedia = document.querySelectorAll(".product-media");
        productsMedia.forEach(productMedia =>{
            productMedia.style.height = "264px";
            for(let i=0; i<productMedia.children.length; i++)
                 productMedia.children[i].style.display = "none";
        });

        const productsText = document.querySelectorAll(".product-text");
        productsText.forEach(productText =>{
            productText.style.display = "none";
        });
        
    }
});

// set the grid for mobile devices
window.matchMedia('(max-width : 767px)').addEventListener('change', function (e) {
    //767px or less
    if(e.matches){
        if(productsContainer.classList.contains("large")){ 
            const gridSmall = document.querySelector(".view-grid-small");
            gridSmall.classList.add("active-view");
            gridSmall.style.color = "#000";
            setSmallGrid("mobile");
        }
    }
});


//-----------------insertion of products inside the grid---------------
const containerProducts = document.querySelector(".products-container");
let productItem, clonedNode;

for(i=2; i<=16; i++){
    productItem = document.querySelector(".product-item");
    clonedNode = productItem.cloneNode(true);
    clonedNode.id= `product${i}`;
    clonedNode.querySelector("#link-img1").id = `link-img${i}`;
    clonedNode.querySelector("#link-btn1").id = `link-btn${i}`;
    containerProducts.appendChild(clonedNode);
}


//------------------------favorite product----------------------

const wishlist = [];

//check local storage and enter values if any
let favorites = JSON.parse(localStorage.getItem('wishlist')) || []; //l'or indica che se non c'è nulla, invece di mettere null generico dà null relativo a un array vuoto
wishlist.push(...favorites);

//add class favorite for each element present in the local storage
favorites.forEach(function(favorite) {
    const favoriteID = document.getElementById(favorite);
    favoriteID.querySelector(".btn-heart").className = "btn-heart favorite";
});
    
//add or remove a favorite product
const buttonHeart = document.getElementsByClassName("btn-heart");

for(i=0; i<buttonHeart.length; i++){
    buttonHeart[i].addEventListener("click", function(e) {
        
        e.preventDefault();
       
        this.classList.toggle("favorite");

        //localStorage of favorite products
        productItemID = this.parentElement.parentElement.parentElement.id;
        if(this.classList.contains("favorite"))
            wishlist.push(productItemID);
        else
            wishlist.splice(wishlist.indexOf(productItemID),1); 
        
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
}

// inserts the id in the localstore of the product called with a link
document.addEventListener(`click`, e => {
  const origin = e.target.closest(`a`);
  
  if (origin) {
   
    localStorage.setItem("idProduct", origin.id );
  }
});



