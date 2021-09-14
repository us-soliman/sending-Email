import { el, all, crtEl } from './func-var.js';



function sendEmail() {
    Email.send({
        SecureToken : "b674e1a2-73b6-4215-b20c-781638f6f63b",
        To: 'samoz.designer@gmail.com',
        From: "samoz.designer@gmail.com",
        Subject: el('#client-subject').value,
        Body: `
        Hello Mr. Ahmed Atef ,
        my Name is ${el('#client-first').value} ${el('#client-last').value}
    
        ${el('#client-message').value}
        
        my E-mail : ${el('#client-email').value}
        my Mobile Number : ${el('#client-number').value}
        `
    })
        .then(function (message) {
            alert(message)
        });
}
el('#sub-mail').addEventListener('click' ,sendEmail)
