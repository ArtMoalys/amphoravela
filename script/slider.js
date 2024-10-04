
// function slider(slider, updateIndexCallback) {
//     const slidesWrapper = slider.querySelector('.slider__wrapper');
//     const slides = slider.querySelectorAll('.slide');
//     const paginationInfo = slider.querySelector('.pagination');

//     let index = 0;
//     let startX = 0;
//     let isDragging = false;

//     // Обновление информации о текущем слайде
//     const updatePaginationInfo = () => {
//         paginationInfo.textContent = `${index + 1}/${slides.length}`;
//         if (typeof updateIndexCallback === 'function') {
//             updateIndexCallback(index);
//         }
//     };

//     // Отображение текущего слайда
//     const showSlide = () => {
//         const width = slides[0].offsetWidth;
//         slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
//         slidesWrapper.style.transform = `translateX(-${index * width}px)`;
//         updatePaginationInfo();
//     };

//     // Начало перетаскивания
//     const handleTouchStart = (event) => {
//         startX = event.touches[0].clientX;
//         isDragging = true;
//         slidesWrapper.style.transition = 'none';
//     };

//     // Перетаскивание
//     const handleTouchMove = (event) => {
//         if (!isDragging) return;
//         const deltaX = event.touches[0].clientX - startX;
//         slidesWrapper.style.transform = `translateX(${deltaX}px)`;
//     };

//     // Завершение перетаскивания
//     const handleTouchEnd = () => {
//         if (!isDragging) return;

//         const deltaX = event.changedTouches[0].clientX - startX;

//         // Определение направления переключения слайда
//         if (Math.abs(deltaX) > 50) {
//             index += deltaX < 0 ? 1 : -1;
//             index = Math.max(0, Math.min(index, slides.length - 1)); // Ограничение индекса
//         }

//         showSlide();
//         isDragging = false;
//     };

//     // Обработчики событий
//     slidesWrapper.addEventListener('touchstart', handleTouchStart);
//     slidesWrapper.addEventListener('touchmove', throttle(handleTouchMove, 33));
//     slidesWrapper.addEventListener('touchend', handleTouchEnd);

//     // Обновление слайда при изменении размера окна
//     window.addEventListener('resize', showSlide);

//     // Инициализация
//     showSlide();
// }

// // Функция throttle для ограничения частоты вызовов
// function throttle(fn, limit) {
//     let inThrottle = false;
//     return function (...args) {
//         if (!inThrottle) {
//             fn.apply(this, args);
//             inThrottle = true;
//             setTimeout(() => (inThrottle = false), limit);
//         }
//     };
// }
