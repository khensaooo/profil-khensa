//toggle class active
const navbarnav = document.querySelector(".navbar-nav");
//ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
