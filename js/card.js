


const translate = {
    "candles": "Свеча",
    "vases": "Вазы",
    "gifts": "Подарочный набор",
    "caskets": "Шкаткулка"
}

function addCardToCatalog() {
    return fetch("data.json").then(response => {
        if(!response.ok) {
            throw new Error("Network response not ok");
        }
        return response.json();
    }).then(data => {
        Object.values(data).forEach((item, index) => {
            let typeProduct = Object.keys(data)[index];

            item.map(e => {
                const card = document.createElement("article");
                card.classList.add("card");
                const id = `${typeProduct}__${e.title.toLowerCase()}`;
                card.id = id;
                const template = `
       <div class="card__img-slider">
           <p class="card__description">${e.description}</p>
           <div class="swiper mySwiper card-swiper">
               <div class="swiper-wrapper">


               </div>
               <div class="swiper-pagination"></div>
           </div>
          
       </div>
       <div class="card__content">
                            <h5 class="card__title">
                                ${translate[typeProduct]} «${e.title}»
                            </h5>
                            <div class="card__price">
                                ${e.price}₽
                            </div>
                        </div>`;


                card.innerHTML += template;
                console.log(typeProduct)
                document.getElementById(typeProduct).appendChild(card);
                for(let i = 1;i <= e.img;i++) {
                    document.getElementById(id).querySelector(".swiper-wrapper")
                        .innerHTML += `<div class="swiper-slide card-slide"><img src="public/${typeProduct.toLowerCase()}/${e.title}/${i}.jpg" alt="${typeProduct}"></div>`;
                }

            });

        });
    });
}







