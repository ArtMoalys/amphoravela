
function modalTransformationAnimation(card) {
    let action = true;

    card.addEventListener('click', function(event) {
        const cross = card.querySelector(".cross");
        if(event.target.classList.contains("cross")) {
            action = true;
            console.log("TTTT");
            cross.style.display = "none";
            card.style.height = `1500px`;
            card.querySelector(".card__desc").innerHTML = '';
            document.querySelector("body").style.overflow = "visible";

            const cardDescription = card.querySelector(".card__description");
            cardDescription.style.opacity = "1";

            const cardDesc = card.querySelector(".card__desc");
            cardDesc.style.opacity = "0";
            setTimeout(() => {
                cardDesc.style.display = "none";
            }, 500);
        } else if(action) {
            action = false;
            const targetRect = card.getBoundingClientRect();
            const middleOfElement = targetRect.top + window.scrollY - 10;
            const slide = card.querySelectorAll(".swiper-slide");
            cross.style.display = "block";
            card.style.height = `${targetRect.height}px`;
            card.setAttribute("data-height",targetRect.height);
            window.scrollTo({
                top: middleOfElement,
                behavior: 'smooth'
            });

            document.querySelector("body").style.overflow = "hidden";
            card.style.height = "100vh";
            const cardDescription = card.querySelector(".card__description")
            cardDescription.style.opacity = "0";


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
                        <p>Описания:</p>
                        <p>${x}</p>
                        `;
            }


        }
    });
}




