// alert - added to cart
document.querySelector(".add-to-cart").addEventListener("click", () => alert("added to cart!"));


// insert accordions inside the DOM
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br>
                Semper at molestie vehicula in dui, sit cursus. Ultrices convallis volutpat dignissim velit sed. 
                Massa, congue purus suspendisse faucibus tincidunt. Sit commodo at in at aliquam placerat odio. `

const accordionTitles = ["Description","Details","Tech Specs","Care Information"];
const containerAccordions = document.querySelector(".container-accordion");

accordionTitles.forEach((title) => {
	const html = ` <div class="accordion">
                        <div class="accordion-label">
                            <h2>${title}</h2>
                        </div>
                            <p>${lorem}</p>
                    </div> `;
    containerAccordions.innerHTML += html;
});

// progress bar of product gallery for small devices
document.querySelector(".product-gallery").addEventListener("scroll", function () {
    let scrollerWrapper = this;
    scrollPercent = (scrollerWrapper.scrollLeft / (scrollerWrapper.scrollWidth - scrollerWrapper.clientWidth)) * 100;
    document.querySelector(".progress-bar").style.width = scrollPercent + "%";
  });



//   controllo iniziale per stabile se bottone è pieno o no

let favorites = JSON.parse(localStorage.getItem('wishlist')) || [];
const wishlist = [];
wishlist.push(...favorites);
const idProduct = localStorage.getItem("idProduct", origin.id ) || "";
numberIDProduct = idProduct.match(/(\d+)/)[0];


favorites.forEach(function(favorite) {
    let numberIDWishlist = favorite.match(/(\d+)/)[0];
   if(numberIDWishlist == numberIDProduct)
        document.querySelector(".btn-heart").className = "btn-heart favorite";
});


//add or remove a favorite product
const buttonHeart = document.getElementsByClassName("btn-heart");

for(i=0; i<buttonHeart.length; i++){
    buttonHeart[i].addEventListener("click", function() {
        this.classList.toggle("favorite");

        if(this.classList.contains("favorite"))
            wishlist.push(`product${numberIDProduct}`);
        else
            wishlist.splice(wishlist.indexOf(`product${numberIDProduct}`),1);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
}
