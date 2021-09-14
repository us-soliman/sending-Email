import { el, all, crtEl } from './func-var.js';


function sendEmail() {
    Email.send({
        SecureToken : "b321eccc-1498-4f8a-9363-e6785934c7e5",
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
