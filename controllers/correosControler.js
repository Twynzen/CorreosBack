const {request, response} = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response ) =>{
    let body = req.body;
    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post:587,
        auth:{
            user:'razzziel001@gmail.com',
            pass:'12345'
        }
    });
}

const opciones = {
    from: 'Programacion',
    subject: body.asunto,
    to: body.email,
    text:body.mensaje
}