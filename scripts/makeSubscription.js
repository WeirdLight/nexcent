export function makeSubscription(){
    let email = document.querySelector('#email-sub');
    let submit = document.querySelector('#sub');

    submit.addEventListener('click', ()=>{
        fetch('https://62y6g.wiremockapi.cloud/emails/1', {
            method: 'POST',
            body: JSON.stringify({
                "id": 1,
                "email": email.value
            })
        });
    })
}