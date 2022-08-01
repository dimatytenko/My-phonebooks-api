const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, token) => {
  const mail = {
    to: email,
    subject: "Service Contacts",
    html: `<a target="_blank" href="${process.env.SENDGRID_HOST}/${process.env.PORT}/api/users/verify/${token}">Verification your email</a>`,
    from: process.env.SENDGRID_FROM,
  };

  try {
    await sgMail.send(mail);
    return true;
  } catch (error) {
    throw error;
  }
};
module.exports = sendEmail;
