const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const mailer = nodemailer.createTransport({
    service: "gmail",
    auth: {
    user: process.env.OWNER_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
    }
})

module.exports = mailer;