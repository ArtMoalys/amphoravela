
function modalTransformationAnimation(card) {
    card.addEventListener('click', function() {
        const targetRect = card.getBoundingClientRect();
        const middleOfElement = targetRect.top + window.scrollY + 15;
        card.style.height = `${targetRect.height}px`;
        window.scrollTo({
            top: middleOfElement,
            behavior: 'smooth'
        });

        document.querySelector("body").style.overflow = "hidden";
        card.style.height = "100vh";
        const cardDescription = card.querySelector(".card__description")
        cardDescription.style.opacity = "0";
        setTimeout(() => {
            cardDescription.style.display = "none";
        },300)

        const cardDesc = card.querySelector(".card__desc");
        const slides = card.querySelectorAll(".slide");
        let currentIndex = card.querySelector(".swiper-pagination-current");
        cardDesc.innerHTML = `
        <p>Описания:</p>
        <p>${slides[0].getAttribute("data-desc")}</p>
        `;

    });
}

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
                    // const currentBottom = parseInt(window.getComputedStyle(card).bottom);
                    // card.style.bottom = `${currentBottom + window.innerHeight - card.offsetHeight}px`;
                });
                const template = `
                <img class="cross" src="icon/cross.png" alt="cross">

                <div class="slides swiper mySwiper">
                    <div class="slider__wrapper swiper-wrapper">
                        
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="card__title-block">
                    <h5 class="card__description-subtitle">${typeProduct}</h5>
                    <h4 class="card__description-title">${e.title.charAt(0).toUpperCase() + e.title.slice(1).toLowerCase()}</h4>
                </div>
                <div class="card__desc">
                
                </div>
                <div class="card__description">
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
                        <img src="img/${e.title}/${i+1}.webp" alt="photo">
                    </div>`
                    } else {
                        const desc = Object.values(description[i]);
                        card.querySelector(".slider__wrapper").innerHTML += `<div class="slide swiper-slide" data-color="${desc[0]}" data-aroma="${desc[1]}" data-time="${e.time}">
                        <img src="img/${e.title}/${i+1}.webp" alt="photo">
                    </div>`
                    }

                }

                modalTransformationAnimation(card);
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

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        }
    });
    
})


