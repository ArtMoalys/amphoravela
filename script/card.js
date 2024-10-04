
function addCardToCatalog() {
    //Take all information from data.json
    return fetch("data.json").then(response => {
        if(!response.ok) {
            throw new Error("Network response not ok");
        }
        return response.json();
    }).then(data => {
        Object.values(data).forEach((item, index) => { //Access loop for types of product
            let typeProduct = Object.keys(data)[index];

            //Scrapping and sorting data from json file to card
            item.map(e => {

                //Create card template
                const card = document.createElement("article");
                card.classList.add("card");
                card.id = `${e.title}`;
                card.setAttribute("data-type",typeProduct);
                card.addEventListener("click", () => {
                   modal(card);
                });
                const template = `
                <div class="slide swiper mySwiper">
                    <div class="slider__wrapper swiper-wrapper">
                        
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="card__description">
                    <h5 class="card__description-subtitle">${typeProduct}</h5>
                    <h4 class="card__description-title">${e.title.charAt(0).toUpperCase() + e.title.slice(1).toLowerCase()}</h4>
                    <p class="card__description-aroma">${e.aroma}</p>
                    <span class="card__description-price">${e.price}</span>
                </div>`;


                card.innerHTML += template;
                document.querySelector(".catalog").appendChild(card);

                const description = Object.values(e.description);
                const colors = Object.keys(e.description);

                //Adding images, descriptions and colors data
                for(let i = 0;i < e.img;i++) {
                    if(i === 0) {
                        card.querySelector(".slider__wrapper").innerHTML += `<div class="slide swiper-slide" data-desc="${description[0]}">
                        <img src="img/${e.title}/${i+1}.jpg" alt="photo">
                    </div>`
                    } else {
                        const desc = Object.values(description[i]);
                        card.querySelector(".slider__wrapper").innerHTML += `<div class="slide swiper-slide" data-color="${desc[0]}" data-aroma="${desc[1]}" data-time="${e.time}">
                        <img src="img/${e.title}/${i+1}.jpg" alt="photo">
                    </div>`
                    }

                }

            });

        });
    });

}


//Merge slider and pagination with cards
// function sliderCard() {
//     const card = document.querySelectorAll(".card");
//     card.forEach(cardItem => {
//
//         slider(cardItem, (index) => {});
//
//         cardItem.addEventListener("click", () => {
//             modal(cardItem);
//         });
//     });
//
// }

addCardToCatalog().then(() => {
    // sliderCard();
    console.log("ewwww")
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        }
    });
})


