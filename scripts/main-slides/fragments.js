import { handleFooter } from "./index-slides.js";

export function CreateFragments() {
    fetch('https://62y6g.wiremockapi.cloud/slides/1')
        .then(data => data.json())
        .then(data => {
            let slides = document.querySelector('.slides');
            data.forEach(element => {
                let newTitle = element.title;
                newTitle = newTitle.replace(`${element.highlighted}`, `<span>${element.highlighted}</span>`);
                let fragment = `
                    <div class="container s${element.id}">
                        <div class='text'>
                            <h1>${newTitle}</h1>
                            <p>${element.description}</p>
                            <button class="register">Register</button>
                        </div>
                        <span class="main-img" style='background-image: url(${element.image})'></span>
                    </div>
                `;
                let template = document.createElement('template');
                template.innerHTML = fragment;
                slides.appendChild(template.content);
            });
        })
        .then(()=>{
            handleFooter();
        });
}