const close_chat = document.querySelector('.fa-xmark');
const box = document.querySelector('#box');
const bouton_chat = document.querySelector('.fa-comments');
const form_tchat_box = document.querySelector('form#tchat_box');
const input = document.querySelector('input.tchat_box');
const box_message = document.querySelector('#box_message');


// Par défaut le tchat est cacher
box.style.display = 'none';

// Ferme le tchat
close_chat.addEventListener('click', () => {
    box.style.display = 'none';
    bouton_chat.style.display = 'block';
});

// Quand je clic sur le bouton tchat sa me ouvre la box tchat et sa me ferme le bouton chat
bouton_chat.addEventListener('click', () => {
    box.style.display = 'block';
    bouton_chat.style.display = 'none';
});

// Récupère les informations saisis par l'utilisateur et affiche dans le tchat
form_tchat_box.addEventListener('submit', (e) => {
    e.preventDefault();

    let message;

    message = input.value;

    // Vérification à faire en si l'utilisateur n'a pas saisi de message

    box_message.innerHTML += '<p><mark>' + message + '</mark></p>';

    input.value = '';
});

