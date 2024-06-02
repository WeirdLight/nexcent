export function createFragmentBlog(){
    fetch('https://62y6g.wiremockapi.cloud/blog/1')
    .then(data => data.json())
    .then(data => {
        let container = document.querySelector('#blog');
        let numbers = [];
        while(numbers.length != 3){
            let random = Math.floor(Math.random()*data.length);
            if(numbers.indexOf(random) == -1) numbers.push(random);
        }
        let arcticles = [data[numbers[0]], data[numbers[1]], data[numbers[2]]];
        arcticles.forEach(element => {
            let fragment = `
            <article>
                <span class="article-img" style="background-image: url(${element.image});"></span>
                <span class="title">
                    <h3>${element.title}</h3>
                    <a href="#">Readmore <span style="background-image: url(./src/green-arrow.svg);"></span></a>
                </span>
            </article>
            `;
            let template = document.createElement('template');
            template.innerHTML = fragment;
            container.appendChild(template.content);
        });
    });
}