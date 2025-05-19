import nodemailer from "nodemailer";
<<<<<<< HEAD

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
=======
export const transporter = nodemailer.createTransport({
  service: 'gmail',
>>>>>>> 8365263c955c863f7ab0e1f7254645740df7c4b4
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: process.env.EMAIL_USER,
<<<<<<< HEAD
};
=======
};



>>>>>>> 8365263c955c863f7ab0e1f7254645740df7c4b4
