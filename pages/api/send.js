import sgMail from "@sendgrid/mail";
// import fs from 'fs';

export const config = {
  api: {
    bodyParser: {
      bodyParser: false
      // sizeLimit: "1mb",
    }
  }
};

export default function handler(req, res) {
  if (req.method === "POST") {
    // const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // req.bodyのキーと値を取得して、メール本文を作成
    let text = Object.keys(req.body)
      .map(key => {
        if (key === "imgfile" || key === "images") {
          return "";
        }
        return `${key}: ${req.body[key]}`;
      })
      .join("\n");
    let html = Object.keys(req.body)
      .map(key => {
        if (key === "imgfile" || key === "images") {
          return "";
        }
        return `${key}: ${req.body[key]}`;
      })
      .join("<br>");

    // 先頭に「"I have received your inquiry. Please await a response."」を追加
    text = "I have received your inquiry. Please await a response.\n\n" + text;
    html = "I have received your inquiry. Please await a response.<br><br>" + html;

    //
    if (req.body.images) {
      text += "\n\n" + "images: " + req.body.images + "\n\n";
      html += "<br><br>" + "images: " + req.body.images + "<br><br>";
    }

    // const text = "I have received your inquiry. Please await a response.\n\n" + "lastname: " + req.body.lastname + "\n" + "firstname: " + req.body.firstname + "\n" + "email: " + req.body.email + "\n" + "company: " + req.body.company + "\n" + "dedication_for: " + req.body.dedication_for + "\n" + "numbers_of_trees: " + req.body.numbers_of_trees + "\n" + "images: " + req.body.images + "\n" + "message: " + req.body.message;
    // const html = "I have received your inquiry. Please await a response.<br><br>" + "lastname: " + req.body.lastname + "<br>" + "firstname: " + req.body.firstname + "<br>" + "email: " + req.body.email + "<br>" + "company: " + req.body.company + "<br>" + "dedication_for: " + req.body.dedication_for + "<br>" + "numbers_of_trees: " + req.body.numbers_of_trees + "<br>" + "images: " + req.body.images + "<br>" + "message: " + req.body.message;

    let _attachments = [];
    if (req.body.imgfile) {
      _attachments = [
        {
          filename: "tempfile.jpg",
          contentType: "image/jpeg",
          content: req.body.imgfile.split("base64,")[1],
          disposition: "attachment",
          content_id: "mytext"
        }
      ];
    }
    let messageFields = {
      subject: "Thank you for your inquiry.",
      from: "ogawa@undefinedcode.com",
      attachments: _attachments
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
        // to: "ogawa@undefinedcode.com",
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
