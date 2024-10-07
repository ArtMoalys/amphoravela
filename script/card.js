

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

                const template = `
                <img class="cross" src="icon/cross.png" alt="cross">

                <div class="slides swiper mySwiper">
                    <div class="slider__wrapper swiper-wrapper">
                        
                    </div>
                    <div class="pagination"> 
                        <span class="current"></span>/<span class="total"></span>
                    </div>
                </div>
                <div class="card__title-block">
                    <h5 class="card__description-subtitle">AmphoraVela ${typeProduct}</h5>
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
                const sliderWrapper = card.querySelector(".slider__wrapper");
                //Adding images, descriptions and colors data
                for(let i = 0;i < e.img;i++) {
                    if(i === 0) {
                        sliderWrapper.innerHTML += `<div class="slide swiper-slide" data-desc="${description[0]}">
                        <img class="img-slide" src="img/${e.title}/${i+1}.webp" alt="photo">
                    </div>`
                    } else {
                        const desc = Object.values(description[i]);
                        sliderWrapper.innerHTML += `<div class="slide swiper-slide" data-color="${desc[0]}" data-aroma="${desc[1]}" data-time="${e.time}">
                        <img class="img-slide" src="img/${e.title}/${i+1}.webp" alt="photo">
                    </div>`
                    }

                }

            });

        });
    });

}


function description(card,index) {
    const cardDesc = card.querySelector(".card__desc");
    const slides = card.querySelectorAll(".slide");

    if(index === 0) {
        cardDesc.innerHTML = `
                  
                    <p class="desc__word">Описания:</p>
                    <p>${slides[0].getAttribute("data-desc")}</p>
                    `;
    } else {
        cardDesc.innerHTML = `
            <div class="desc__block">
                <label for="desc__color">Цвет: </label>
                <p id="desc__color">&nbsp; ${slides[index].getAttribute("data-color")}</p>
            </div>
            <div class="desc__block">
                <label for="desc__aroma">Аромат: </label>
                <p id="desc__aroma"> &nbsp;${slides[index].getAttribute("data-aroma")}</p>
            </div>
            <div class="desc__block">
                <label for="desc__time">Время горения: </label>
                <p id="desc__time"> &nbsp;${slides[index].getAttribute("data-time")}</p>
            </div>
            
           
        `;
    }

}


addCardToCatalog().then(() => {
    const cards = document.querySelectorAll('.card');
    const ms = document.querySelectorAll(".mySwiper");
    function updatePagination(swiper,first,last) {
        const current = swiper.realIndex + 1;
        const total = swiper.slides.length;
        first.innerHTML = current;
        last.innerHTML = total;
    }
    cards.forEach((card,index) => {
        let permissionForDesc = modalTransformationAnimation(card,1);
        let current = card.querySelector(".current");
        let total = card.querySelector(".total");

        let swiper = new Swiper(ms[index], {
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
            },
            on: {
                init: function () {
                    updatePagination(this,current,total);
                },
                slideChange: function () {
                   let currentRealIndex = this.activeIndex;
                    current.innerHTML = currentRealIndex + 1;
                    total.innerHTML = swiper.slides.length;
                    description(card,currentRealIndex);
                },

            }
        });



    });


})

