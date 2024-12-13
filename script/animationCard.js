
function modalTransformationAnimation(card) {
    let action = true;

    card.addEventListener('click', function(event) {
        const imgs = card.querySelectorAll(".img-slide");
        const cross = card.querySelector(".cross");
        const bodyElement = document.querySelector("body").style;
        let currentSizeBoyElement = document.querySelector("body").offsetHeight;

        if(event.target.classList.contains("cross")) {
            action = true;
            cross.style.display = "none";
            card.style.height = `630px`;
            card.querySelector(".card__desc").innerHTML = '';
            document.querySelector("body").style.overflow = "visible";
            bodyElement.height = currentSizeBoyElement - 400 + "px";

            const cardDescription = card.querySelector(".card__description");
            cardDescription.style.opacity = "1";
            imgs.forEach(img => {
                img.style.scale = "0.85";
                img.style.borderRadius = "40px";
            });

            const cardDesc = card.querySelector(".card__desc");
            cardDesc.style.opacity = "0";
            setTimeout(() => {
                cardDesc.style.display = "none";

            }, 500);
            
        } else if(action) {
            action = false;
            bodyElement.height = currentSizeBoyElement + 400 + "px";
            const targetRect = card.getBoundingClientRect();
            const middleOfElement = targetRect.top + window.scrollY - 10;
            const slide = card.querySelectorAll(".swiper-slide");
            imgs.forEach(img => {
               img.style.scale = "1";
               img.style.borderRadius = "0";
            });
            cross.style.display = "block";
            card.style.height = `${targetRect.height}px`;
            card.setAttribute("data-height",targetRect.height);
            window.scrollTo({
                top: middleOfElement,
                behavior: 'smooth'
            });
            bodyElement.overflow = "hidden";
            
            card.style.height = "100vh";
            const cardDescription = card.querySelector(".card__description")
            cardDescription.style.opacity = "0";
            card.style.overflow = "auto";

            const cardDesc = card.querySelector(".card__desc");
            cardDesc.style.opacity = 1;
            cardDesc.style.display = "block";
            const ind = card.querySelector(".current").innerHTML;
            if(ind > 1) {
                cardDesc.innerHTML = `
            <div class="desc__block">
                <label for="desc__color">Цвет: </label>
                <p id="desc__color">&nbsp; ${slide[ind - 1].getAttribute("data-color")}</p>
            </div>
            <div class="desc__block">
                <label for="desc__aroma">Аромат: </label>
                <p id="desc__aroma"> &nbsp;${slide[ind - 1].getAttribute("data-aroma")}</p>
            </div>
            <div class="desc__block">
                <label for="desc__time">Время горения: </label>
                <p id="desc__time"> &nbsp;${slide[ind - 1].getAttribute("data-time")}</p>
            </div>
                `;
            } else {
                const x = slide[ind - 1].getAttribute("data-desc");
                cardDesc.innerHTML = `
                        <p class="desc__word" style="white-space: pre-wrap">Описания:</p>
                        <p>${x}</p>
                        `;
            }


        }
    });
}




