const { Resend } = require("resend");
const resend = new Resend("re_SbFEDtGa_CSDJ91Mgsk1J3xAEN9YtT49u");
const img = "https://drive.google.com/uc?id=1wSosXq0mFRjhAcAFzrwj400zkgJVxTIO";

const sendEmail = async (req, res) => {
  // console.log(req.body);
  const { name, email, phone, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: "AgroFriend <onboarding@resend.dev>",
    to: ["dev.vikashpatel@gmail.com"],
    subject: "New Message - AgroFriend",
    html: `
    <!doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Message - AgroFriend</title>
    <style>
        body {
            background-color: #f7f7f7;
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 30px auto;
            padding: 40px; 
            background-color: #ffffff;
            border: 1px solid #ddd;
            text-align: left;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
            border-radius: 5px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            background-color: #26c6da;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .footer {
            font-size: 12px;
            color: #777777;
            margin-top: 20px;
        }
        .header {
            font-weight: bold; 
        }
    </style>
    </head>
    <body>
    <div class="container">
        <img src=${img} alt="Logo" style="height: 100px; margin: 0 auto 20px; display: block;">
        <h1 class="header">New Message</h1>
        <p>Hello, I am ${name},</p>
        <p>My email Id is : ${email}</p>
        <p>My phone number is : ${phone}</p>
        <p class="footer">${message}</p>
        <p class="footer">Regards,</p>
        <p class="footer">${name}</p>
    </div>
    </body>
    </html>`,
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
};

module.exports = sendEmail;
