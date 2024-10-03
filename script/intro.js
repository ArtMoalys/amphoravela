const animatedText = document.getElementById('animatedText');

animatedText.addEventListener('animationend', (event) => {
    if (event.animationName === 'fill-animation') {
        document.querySelector("body").style.background = "white";
        document.querySelector(".header__title").style.animation = "moveToHeader 1s ease forwards";
        document.querySelectorAll(".card").forEach(t => {
            t.style.opacity = "1";
        });
        setTimeout(() => {
            document.querySelector(".header__title").style.zIndex = "-1";
            document.querySelector("body").style.overflow = "visible";
            // document.querySelector("text").style.textDecoration = "underline";
        },1000);
    }
});