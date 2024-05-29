import { burgerMenu } from "./burgerMenu.js";
import { changingSlides } from "./main-slides/changingSlides.js";
import { registerForm } from "./register.js";
import { CreateFragments } from "./main-slides/fragments.js";

CreateFragments();
burgerMenu();
let interval = () => { setInterval(changingSlides, 5000) };
interval();
registerForm();