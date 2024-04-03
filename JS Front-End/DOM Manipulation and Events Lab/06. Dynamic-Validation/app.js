function validate() {
    emailBoxElement = document.getElementById('email');

    const validEmailPattern  = /^[a-z]+@[a-z]+\.[a-z]+/;

    emailBoxElement.addEventListener('change', (event) => {
        if (!validEmailPattern.test(event.target.value)) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    })
}