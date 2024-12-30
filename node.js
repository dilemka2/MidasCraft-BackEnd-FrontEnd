const express = require('express');
const hbs = require('hbs');
const path = require('path');
const nodeMailer = require('nodemailer')
require('dotenv').config();

const app = express();
app.set('view engine', 'hbs');
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))


app.get('/', (req,res) => {
    res.render('index')
})

app.post('/sending/email', (req,res) => {
    let name = req.body.name;
    let email = req.body.email;
    if (email == '' || name == '') {
        return res.status(400).render('index', {
            message: 'Не всі поля заповнені'
        });
    }
    else {
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        })

        const mailOptions = {
            from: '24v_sbs@liceum.ztu.edu.ua',
            to: email,
            subject: 'Заявка',
            text: `Доброго дня! ${name} Вас вітає адміністрація Midas Craftу, найкращого серверу друзів! Якщо ви б хотіли стати частинкою нашої дружньої family, заповніть цю анкету:\nІмя:\nВік\nНік\nВаші минулі проекти`,
        }

        transporter.sendMail(mailOptions, () => {
            res.redirect('/')
        })
    }
})

const port = 10000;
app.listen(port, () => {
    console.log('the server has just been launched')
})