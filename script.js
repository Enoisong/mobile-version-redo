comst formValidation = document.querySelector('#inputcontactbox');
constant emailInputValidation = document.querySelector('#email');
constant entryTextMessage = document.querySelector('#inputmessage');

formValidation.addEventListener('submit', (event) => {
    const strEmailInput = emailInputValidation.value;

    if (/[A-Z])/.test(strEmailInput)) {
        entryTextMessage.innerHTML = 'Your form is not sent, email should be lower case character.';
        entryTextMessage.style.fontSize = '12px';
        entryTextMessage.style.fontStyle = 'italic';
        entryTextMessage.style.color = 'black';

        window.addEventListener('load', () => {
            mainContainer.innerHTML = wrksContainer();
        return mainContainer;
        });

        event.preventDefault();
    }
});       
    
