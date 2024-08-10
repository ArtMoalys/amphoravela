
const cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
    body.style.overflow = "scroll";
});
const body = document.querySelector("body");

function modal_window(element) {

    const title = element.querySelector(".card__title");
    const price = element.querySelector(".card__price");
    const images = element.querySelectorAll("img");
    const description = element.querySelector(".card__description");
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    console.log(title);

    const modal__img = document.querySelectorAll(".modal__img");
    const modal__title = document.querySelector(".modal__title");
    const modal__price = document.querySelector(".modal__price");
    const modal__text = document.querySelector(".modal__text");

    modal__title.innerText= title.innerText;
    modal__price.innerText = price.innerText;
    modal__text.innerText = description.innerText;
    let imgArray = '';
    for(let i = 0;i < images.length;i++) {
        imgArray += `<img src=${images[i].src}>`;
    }
    modal.querySelector(".modal__img").innerHTML = imgArray;

}