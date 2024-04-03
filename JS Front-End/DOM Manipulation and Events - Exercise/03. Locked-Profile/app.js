function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');

    for (const profileElement of profileElements) {
        const profileShowButtonElement = profileElement.querySelector('button');
        const lockedRadioElement = profileElement.querySelector('input[type=radio][value=lock]')


        profileShowButtonElement.addEventListener('click', () => {
            if (lockedRadioElement.checked) {
                return;
            }

            const hiddenFieldElement = profileShowButtonElement.previousElementSibling;

            if (profileShowButtonElement.textContent === 'Show more') {
                hiddenFieldElement.style.display = 'block';
                profileShowButtonElement.textContent = 'Hide it';
            } else {
                hiddenFieldElement.style.display = 'none';
                profileShowButtonElement.textContent = 'Show more';
            }
        });
    }
}