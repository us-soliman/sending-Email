import { el, all, crtEl } from './func-var.js';


function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "samoz.designer@gmail.com",
        Password: "nswiczkeetjugvuh",
        To: 'samoz.designer@gmail.com',
        From: "samoz.designer@gmail.com",
        Subject: el('#client-subject').value,
        Body: `
        Name : ${el('#client-first').value} ${el('#client-last').value}
        <br/>
        Email : ${el('#client-email').value}
        <br/>
        Mobile Number : ${el('#client-number').value}
        <br/>
        <br/>
        The Message => 
        <br/>
        ${el('#client-message').value}
        `
    })
        .then(function (message) {
            alert(message)
        });
}
el('#sub-mail').addEventListener('click' ,sendEmail)

