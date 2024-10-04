//function optimization
function throttle(fn,limit) {
    let inThrottle;
    return function (...args) {
        if(!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    }
}



function slider(slider, updateIndexCallback) {
    let paginationIndex = 1;
    const slidesWrapper = slider.querySelector('.slider__wrapper');
    const slides = slider.querySelectorAll('.slide');
    const paginationInfo = slider.querySelector('.pagination');

    let index = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    function updatePaginationInfo() {
        paginationInfo.textContent = `${index + 1}/${slides.length}`;
        paginationIndex = paginationInfo.textContent[0];
        if (typeof updateIndexCallback === 'function') {
            updateIndexCallback(index);
        }
    }

    function showSlide(index) {
        const width = slides[0].offsetWidth;
        slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
        slidesWrapper.style.transform = `translateX(-${index * width}px)`;
        updatePaginationInfo();
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        currentX = startX;
        isDragging = true;
        slidesWrapper.style.transition = 'none';
    }

    function handleTouchMove(event) {
        if (!isDragging) return;
        currentX = event.touches[0].clientX;
        const deltaX = currentX - startX;
        const width = slides[0].offsetWidth;
        slidesWrapper.style.transform = `translateX(${deltaX - index * width}px)`;
    }

    function handleTouchEnd() {
        if (!isDragging) return;
        const deltaX = currentX - startX;

        if (deltaX < -50 && index < slides.length - 1) {
            index++;
        } else if (deltaX > 50 && index > 0) {
            index--;
        }

        showSlide(index);
        isDragging = false;
    }

    slidesWrapper.addEventListener('touchstart', handleTouchStart);
    slidesWrapper.addEventListener('touchmove', throttle(handleTouchMove,33));
    slidesWrapper.addEventListener('touchend', handleTouchEnd);

    //For different display size
    window.addEventListener('resize', function () {
        showSlide(index);
    });

    showSlide(index);
}
