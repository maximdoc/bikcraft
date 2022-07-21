// const animItems = document.querySelectorAll('._anim-items');
//
// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;
//
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//
//             if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('_active');
//             } else {
//                 if (!animItem.classList.contains('_anim-no-hide')) {
//                     animItem.classList.remove('_active');
//                 }
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
//
//     setTimeout(() => {
//         animOnScroll();
//     }, 300);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const scrollItems = document.querySelectorAll('._anim-items')
//
//     const scrollAnimation = () => {
//         let windowCenter = (window.innerHeight / 2) + window.scrollY;
//         scrollItems.forEach(el => {
//             let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
//             if (windowCenter >= scrollOffset) {
//                 el.classList.add('_active');
//             } else {
//                 el.classList.remove('_active');
//             }
//         });
//     };
//     scrollAnimation();
//     window.addEventListener('scroll', () => {
//         scrollAnimation();
//     })
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const scrollItems = document.querySelectorAll('._anim-items');
//
//     const scrollAnimation = () => {
//         let windowCenter = (window.innerHeight / 2) + window.scrollY;
//         console.log(windowCenter)
//         scrollItems.forEach(el => {
//             let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
//             if (windowCenter >= scrollOffset) {
//                 el.classList.add('_active');
//             } else {
//                 el.classList.remove('_active');
//             }
//         });
//     };
//
//     scrollAnimation();
//     window.addEventListener('scroll', () => {
//         scrollAnimation();
//     });
// });


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('_active');
        }
    });
}

let options = {
    threshold: [0.8] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('._anim-items');

for (let elm of elements) {
    observer.observe(elm);
}
