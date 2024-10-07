// //function optimization
// function throttle(fn,limit) {
//     let inThrottle;
//     return function (...args) {
//         if(!inThrottle) {
//             fn.apply(this, args);
//             inThrottle = true;
//             setTimeout(() => (inThrottle = false), limit);
//         }
//     }
// }
//
//
//
// function slider(slider, updateIndexCallback) {
//     let paginationIndex = 1;
//     const slidesWrapper = slider.querySelector('.slider__wrapper');
//     const slides = slider.querySelectorAll('.slide');
//     const paginationInfo = slider.querySelector('.pagination');
//
//     const slideWidth = slides[0].offsetWidth; // Избегаем многократного вызова offsetWidth
//     let index = 0;
//     let startX = 0;
//     let currentX = 0;
//     let isDragging = false;
//     let lastDeltaX = 0;
//     let rafId = null;
//
//     // function updatePaginationInfo() {
//     //     paginationInfo.textContent = `${index + 1}/${slides.length}`;
//     //     if (typeof updateIndexCallback === 'function') {
//     //         updateIndexCallback(index);
//     //     }
//     // }
//
//     function showSlide(index) {
//         // Используем классы для анимации, чтобы избежать прямого изменения стилей
//         slidesWrapper.classList.add('transition');
//         slidesWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
//         // updatePaginationInfo();
//
//         // Убираем класс с анимацией после перехода
//         slidesWrapper.addEventListener('transitionend', () => {
//             slidesWrapper.classList.remove('transition');
//         }, { once: true });
//     }
//
//     function handleTouchStart(event) {
//         startX = event.touches[0].clientX;
//         currentX = startX;
//         isDragging = true;
//         lastDeltaX = 0;
//         cancelAnimationFrame(rafId); // Отменяем предыдущие анимации, если есть
//     }
//
//     function handleTouchMove(event) {
//         if (!isDragging) return;
//         currentX = event.touches[0].clientX;
//         const deltaX = currentX - startX;
//
//         // Используем requestAnimationFrame для плавной анимации
//         rafId = requestAnimationFrame(() => {
//             slidesWrapper.style.transform = `translateX(${deltaX - index * slideWidth}px)`;
//         });
//     }
//
//     function handleTouchEnd() {
//         if (!isDragging) return;
//         const deltaX = currentX - startX;
//
//         // Логика для переключения слайда
//         if (deltaX < -50 && index < slides.length - 1) {
//             index++;
//         } else if (deltaX > 50 && index > 0) {
//             index--;
//         }
//
//         showSlide(index);
//         isDragging = false;
//         cancelAnimationFrame(rafId); // Отменяем анимацию, если она больше не нужна
//     }
//
//     // Добавляем и удаляем классы для переходов
//     function addListeners() {
//         slidesWrapper.addEventListener('touchstart', handleTouchStart);
//         slidesWrapper.addEventListener('touchmove', handleTouchMove);
//         slidesWrapper.addEventListener('touchend', handleTouchEnd);
//     }
//
//     function removeListeners() {
//         slidesWrapper.removeEventListener('touchstart', handleTouchStart);
//         slidesWrapper.removeEventListener('touchmove', handleTouchMove);
//         slidesWrapper.removeEventListener('touchend', handleTouchEnd);
//     }
//
//     addListeners();
//
//     // Функция для остановки слайдера (например, когда страница скрыта)
//     function stopSlider() {
//         removeListeners();
//     }
//
//     // При необходимости вызовите stopSlider(), чтобы остановить слайдер
// }
//
