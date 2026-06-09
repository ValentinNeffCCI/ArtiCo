const dotenv = require("dotenv");
const fs = require("fs");
const mailer = require("./mailer");

dotenv.config();

const destination = process.env.OWNER_EMAIL;
const template = fs.readFileSync("./templates/mails/message_recap.html", {
  encoding: "utf-8",
});

const sendRecap = async (submission, destinataire = destination) => {
  const { ...content } = submission.content;
  const { formulaire } = submission;
  const recap = Object.keys(content).map((key) => {
    return `<tr><th style="padding: 15px">${key}</th><td style="padding: 15px">${content[key]}</td></tr>`;
  });
  const mailContent = template.replace("{{content}}", recap.join(""));
  mailer.sendMail({
    to: destinataire,
    html: mailContent,
    subject: `Artico - Nouvelle réponse au questionnaire : ${formulaire.name}`,
  });
};

module.exports = sendRecap;
