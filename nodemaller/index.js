const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service:"gmail",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "tanya907.be22@chitkara.edu.in",
    pass: "ylue ausr wuyr jbbi",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'tanya907.be22@chitkara.edu.in', // sender address
    to: "tbatra308@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);



