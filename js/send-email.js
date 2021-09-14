import { el, all, crtEl } from './func-var.js';


function sendEmail() {
    Email.send({
        SecureToken : "8aede870-8a94-4edb-ad01-9303a4cf2564",
        To: "samoz.designer@gmail.com",
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

