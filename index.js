import { burgerMenu } from "./burgerMenu.js";
import { changingSlides } from "./main-slides/changingSlides.js";
import { createFragmentBlog } from "./blog/fragments.js";
import { createFragmentSlides } from "./main-slides/fragments.js";
import { makeSubscription } from "./makeSubscription.js";

createFragmentSlides();
burgerMenu();
let interval = () => setInterval(changingSlides, 5000);
interval();
createFragmentBlog();
makeSubscription();