import { el, all, crtEl } from './func-var.js';



function sendEmail() {
    Email.send({
        SecureToken : "9f494c7b-7a11-4a5d-821d-e47f3f76c188",
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
