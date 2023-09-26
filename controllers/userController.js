import axios from "axios";
import nodemailer from "nodemailer";
import { Vonage } from "@vonage/server-sdk";

// sms api setup
const vonage = new Vonage({
  apiKey: "9d4cab1b",
  apiSecret: "kahS98EjzaQAHyhO",
});

const from = "Vonage APIs";
const to = "8801712051936";
const text = "A text message sent using the Vonage SMS API";

async function sendSMS(to, from, text) {
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });
}

// get all user
export const getAllUser = (req, res) => {
  res.send("hello");
};

// get all user
export const createUser = (req, res) => {
  res.status(200).json(req.body);
};

// get all user
export const registerUser = async (req, res) => {
  // create mail transport
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: `JakaNaka Group <${process.env.MAIL_ADDRESS}>`,
    subject: "JakaNaka Test",
    to: req.body.email,
    text: `Hello ${req.body.name}, You are ${req.body.age} years old and you are ${req.body.skill} Developer`,
    html: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    
        <style>
          .main_wreper {
            height: 100vh;
            width: 100%;
            background-color: #e9e9e9e9;
            padding: 100px;
          }
          .website {
            width: 40%;
            height: 500px;
            background-color: #ffff;
            box-shadow: 5px 10px #888888;
            margin: 0px auto;
            border-radius: 5px;
          }
          .header img {
            height: 70px;
            object-fit: cover;
            margin: 5px 10px;
          }
          .content {
            padding: 20px 60px;
          }
          .content p {
            width: 500px;
            padding: 15px;
          }
          .verify_btn {
            padding: 15px 40px;
            background-color: red;
            color: #ffff;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
            display: inline-block;
            margin-left: 200px;
            cursor: pointer;
          }
          .footer ul {
            display: inline-block;
            text-align: center;
          }
          .footer ul li {
            display: inline-block;
            font-style: none;
          }
          .footer ul li a {
            padding: 5px;
            cursor: pointer;
          }
          .footer ul img {
            height: 30px;
            width: 30px;
          }
        </style>
      </head>
    
      <body>
        <div class="main_wreper">
          <div class="website">
            <div class="header">
              <img
                src="https://mms.businesswire.com/media/20181015005920/en/526457/22/Twilio_logo_red.jpg"
                alt=""
              />
              <hr />
            </div>
            <div class="content">
              <span>Hello ${req.body.name}</span> ,
              <p>
                You are ${req.body.age} years old and you are also a ${req.body.skill} developer
              </p>
              <a class="verify_btn" href="#">Verify Your Email</a>
            </div>
            <div class="footer">
              <ul>
                <li>
                  <a href="#"
                    ><img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="https://www.pngitem.com/pimgs/m/107-1073759_link-svg-missing-transparent-link-icon-png-png.png"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                      alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
    
    `,
  });

  await sendSMS(
    "8801712051936",
    "Vonage APIs",
    `Hello ${req.body.name}, You are ${req.body.age} and you are a ${req.body.skill} Developer`
  );

  // await axios.get(
  //   `http://bulksmsbd.net/api/smsapi?api_key=cxVzYEy04o7WVqpJOf77&type=text&number=(${req.body.cell})&senderid=8809612443880&message=(Hi ${req.body.name}, you are ${req.body.age} years old and you are a ${req.body.skill} Developer)`
  // );

  res.status(200).json(req.body);
};
