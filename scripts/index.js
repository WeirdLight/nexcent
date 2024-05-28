import { burgerMenu } from "./burgerMenu.js";
import { handleFooter } from "./main-slides/index-slides.js";
import { changingSlides } from "./main-slides/changingSlides.js";
import { registerForm } from "./register.js";

burgerMenu();
handleFooter();
let interval = () => { setInterval(changingSlides, 5000) };
interval();
registerForm();