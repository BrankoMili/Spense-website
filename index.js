const hamburger_button = document.getElementById("hamburger-button");
const mobile_menu = document.getElementById("mobile-menu");
let hamburger_button_status = false;

hamburger_button.addEventListener("click", () => hamburger_enable_disable());

const hamburger_enable_disable = () => {
  if (!hamburger_button_status) {
    mobile_menu.style.display = "block";
    hamburger_button_status = true;
    document.body.style.overflow = "hidden";
  } else {
    mobile_menu.style.display = "none";
    hamburger_button_status = false;
    document.body.style.backgroundColor = "white";
    document.body.style.overflow = "auto";
  }
};

// const changebackground = () => {
//   if (window.innerWidth <= 768) {

//   } else if (window.innerWidth <= 992) {

//   } else {

//   }
// };

// window.addEventListener("resize", changebackground);
