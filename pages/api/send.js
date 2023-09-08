import sgMail from "@sendgrid/mail";
// import fs from 'fs';

export default function handler(req, res) {
  if (req.method === "POST") {
    // const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("*****"); //SendGridのAPIキー

    // 添付画像の処理
    // const images = req.body.images;
    // const image = images.split("base64,")[1];
    // const imageBuffer = new Buffer.from(image, "base64");

    const text = "I have received your inquiry. Please await a response.\n\n" + "lastname: " + req.body.lastname + "\n" + "firstname: " + req.body.firstname + "\n" + "email: " + req.body.email + "\n" + "company: " + req.body.company + "\n" + "dedication_for: " + req.body.dedication_for + "\n" + "numbers_of_trees: " + req.body.numbers_of_trees + "\n" + "images: " + req.body.images + "\n" + "message: " + req.body.message;

    const html = "I have received your inquiry. Please await a response.<br><br>" + "lastname: " + req.body.lastname + "<br>" + "firstname: " + req.body.firstname + "<br>" + "email: " + req.body.email + "<br>" + "company: " + req.body.company + "<br>" + "dedication_for: " + req.body.dedication_for + "<br>" + "numbers_of_trees: " + req.body.numbers_of_trees + "<br>" + "images: " + req.body.images + "<br>" + "message: " + req.body.message;

    let messageFields = {
      subject: "Thank you for your inquiry.",
      from: "ogawa@undefinedcode.com"
    };

    messageFields["personalizations"] = [
      {
        to: req.body.email,
        substitutions: {
          textMessage: text,
          htmlMessage: html
        }
      },
      {
        to: "himalayanowhere@gmail.com",
        substitutions: {
          textMessage: text,
          htmlMessage: html
        }
      }
    ];

    messageFields["text"] = "%textMessage%";
    messageFields["html"] = "%htmlMessage%";
    messageFields["substitutionWrappers"] = ["%", "%"];

    // const msg = {
    //   to: req.body.email,
    //   // to: "ogawa@undefinedcode.com",
    //   from: 'ogawa@undefinedcode.com',
    //   subject: 'Thank you for your inquiry.',
    //   text:
    //     'I have received your inquiry. Please await a response.\n\n' +
    //     'lastname: ' + req.body.lastname + '\n' +
    //     'firstname: ' + req.body.firstname + '\n' +
    //     'email: ' + req.body.email + '\n' +
    //     'company: ' + req.body.company + '\n' +
    //     'dedication_for: ' + req.body.dedication_for + '\n' +
    //     'numbers_of_trees: ' + req.body.numbers_of_trees + '\n' +
    //     'images: ' + req.body.images + '\n' +
    //     'message: ' + req.body.message,
    //   html:
    //     'I have received your inquiry. Please await a response.<br><br>' +
    //     'lastname: ' + req.body.lastname + '<br>' +
    //     'firstname: ' + req.body.firstname + '<br>' +
    //     'email: ' + req.body.email + '<br>' +
    //     'company: ' + req.body.company + '<br>' +
    //     'dedication_for: ' + req.body.dedication_for + '<br>' +
    //     'numbers_of_trees: ' + req.body.numbers_of_trees + '<br>' +
    //     'images: ' + req.body.images + '<br>' +
    //     'message: ' + req.body.message,
    //   // attachments: [
    //   //   {
    //   //     filename: "tempfile.jpg",
    //   //     contentType:  'image/jpeg',
    //   //     cid: '12345',
    //   //     content: req.body.imgfile//new Buffer.from(req.body.imgfile.split("base64,")[1], "base64"),
    //   //   }
    //   // ]
    //   // files: [
    //   //   {
    //   //     filename: 'testimage.jpg',
    //   //     contentType: 'image/jpeg',
    //   //     cid: '12345',
    //   //     content: req.body.imgfile//.split("base64,")[1]
    //   //   }
    //   // ]
    // };

    (async () => {
      try {
        await sgMail.send(messageFields);
        // await sgMail.send(msg);
        res.status(200).json({ status: 200, message: "Email sent successfully" });
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
        res.status(500).json({ status: 500, message: "Internal Server Error" });
      }
    })();
  }
}
