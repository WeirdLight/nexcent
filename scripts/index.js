import { burgerMenu } from "./burgerMenu.js";
import { handleFooter } from "./main-sliders/index-sliders.js";
import { changingSliders } from "./main-sliders/changingSliders.js";
import { registerForm } from "./register.js";

burgerMenu();
handleFooter();
let interval = () => { setInterval(changingSliders, 5000) };
interval();
registerForm();