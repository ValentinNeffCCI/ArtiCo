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
    const value = Array.isArray(content[key])
      ? content[key].join(", ")
      : String(content[key] ?? "");
    return `<tr><th style="padding: 15px">${key}</th><td style="padding: 15px">${value.replaceAll("<", "{").replaceAll(">", "};")}</td></tr>`;
  });
  const mailContent = template.replace("{{content}}", recap.join(""));
  await mailer.sendMail({
    to: destinataire,
    html: mailContent,
    subject: `Artico - Nouvelle réponse au questionnaire : ${formulaire.name}`,
  });
};

module.exports = sendRecap;
