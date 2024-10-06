// const modalWindow = document.querySelector(".modal");
//
//
// //Animation parameters
// const animation = modalWindow.animate(
//     [
//
//         { transform: 'scale(1)', opacity: 1 },
//         { transform: 'scale(0)', opacity: 0 }
//     ],
//     {
//         duration: 300,
//         fill: 'forwards',
//         iterations: 1,
//         easing: 'ease-in'
//     },
//
// )
// animation.cancel();
//
//
// function modalExit() {
//     const modalDescription = document.querySelector(".modal__description-desc");
//
//     //Animation close modal window
//     animation.reverse();
//     animation.play();
//     function clear() {
//         const modalWrapper = document.querySelector("#modal__wrapper");
//         modalWrapper.innerHTML = "";
//         modalDescription.innerHTML = "";
//
//     }
//
//     animation.finished.then( () => {
//         modalWindow.style.display = "none";
//         clear();
//     });
//     document.querySelector("body").style.overflow = "visible";
// }
//
// window.addEventListener("popstate", () => {
//     modalExit();
// });
//
// function modal(item) {
//
//     //Scrapping data from card
//     const title = item.querySelector(".card__description-title" );
//     const subtitle = item.querySelector(".card__description-subtitle")
//     const price = item.querySelector(".card__description-price");
//     const images = item.querySelector(".swiper");
//
//
//     //Access to modal window elements
//     const modal = document.querySelector(".modal");
//     const slidesWrapperModal = document.querySelector('#modal__wrapper');
//     const modalDescription = document.querySelector(".modal__description-desc");
//     const modalPagination = document.querySelector("#modal__pagination");
//     const modalSubtitle = document.querySelector("#modal__subtitle");
//     const x = images.cloneNode(true);
//     modal.insertBefore(x,modal.firstChild);
//
//     modal.style.display = "block";
//
//
//     // const modalTitle = document.querySelector("#modal__title");
//     // const modalPrice = document.querySelector("#modal__price");
//     //
//     // modalTitle.innerHTML = title.innerText;
//     // modalSubtitle.innerHTML = subtitle.innerHTML;
//     // const colorDesc = document.createElement("span");
//     // modalTitle.appendChild(colorDesc);
//     // modalPrice.innerHTML = price.innerHTML;
//     //
//     // //Animation open modal window
//     // animation.reverse();
//     // animation.play();
//     //
//     // //Scrapping descriptions and colors from cards
//     // document.querySelector("body").style.overflow = "hidden";
//     // let generalizedDesc = images[0].getAttribute("data-desc");
//     // let colors = [];
//     // let aroma = [];
//     // let time;
//     // images.forEach((img, index) => {
//     //     if(index !== 0) {
//     //         colors[index-1] = img.getAttribute("data-color");
//     //         aroma[index-1] = img.getAttribute("data-aroma");
//     //         time = img.getAttribute("data-time");
//     //     }
//     // });
//     //
//     //
//     // Array.from(images).forEach(img => {
//     //     const clone = img.cloneNode(true);
//     //     slidesWrapperModal.appendChild(clone);
//     // });
//     //
//     // const modalTitleSlideDesc = document.querySelector(".modal__title-slide");
//     // const modalOthersSlidesDesc = document.querySelector(".modal__others-slides");
//     //
//     // modalTitleSlideDesc.querySelector(".modal__description-desc").innerHTML = generalizedDesc;
//
//
// }
