import { el, all, crtEl } from './func-var.js';


function sendEmail() {
    Email.send({
        SecureToken : "8cecfff0-c96c-46bd-86bc-89cfbdb57557",
        
//         Username: "samoz.designer@gmail.com",
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

