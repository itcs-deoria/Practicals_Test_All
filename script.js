// // Smooth scrolling for navigation links
// document.querySelectorAll('.navbar a').forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//         });
//     });
// });
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
