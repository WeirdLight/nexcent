export function registerForm(){
    let registerButton = document.querySelectorAll('.register');
    let form = document.querySelector('.register-form');
    let exit = document.querySelector('.exit');
    let password = document.querySelector('#password');
    let svg = document.querySelector('svg');
    let showIcon = document.querySelector('#show-or-hide');
    let submit = document.querySelector('#submit');


    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '1');
    line.setAttribute('y1', '20');
    line.setAttribute('x2', '23');
    line.setAttribute('y2', '5');
    line.setAttribute('stroke', '#F5F7FA');
    line.setAttribute('stroke-width', '2');

    for(let i of registerButton){
        i.addEventListener('click', ()=>{
            form.classList.add('open');
        });
    }

    exit.addEventListener('click', ()=>{
        form.classList.remove('open');
    });

    password.addEventListener('click', ()=>{
        showIcon.setAttribute('fill', '#4d4d4d');
        line.setAttribute('stroke', '#4d4d4d');
    });
    password.addEventListener('blur', ()=>{
        showIcon.setAttribute('fill', '#F5F7FA');
        line.setAttribute('stroke', '#F5F7FA');
    });

    svg.addEventListener('click', ()=>{
        if(!document.querySelector('line')){
            svg.appendChild(line);
            password.setAttribute('type', 'text');
        }
        else{
            svg.removeChild(line);
            password.setAttribute('type', 'password');
        }
    });

    submit.addEventListener('click', () => {
        fetch('https://62y6g.wiremockapi.cloud/json/1')
        .then(data => data.json())
        .then(data => {
            fetch('https://62y6g.wiremockapi.cloud/json/1', {
                method: "POST",
                body: JSON.stringify({
                    "id": data[data.length-1].id+1,
                    "nickname": document.querySelector('#nickname').value,
                    "email": document.querySelector('#email').value,
                    "password": password.value
                })
            });
        });
    });
}