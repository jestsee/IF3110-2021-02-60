var http = require("http");
http
  .createServer(function (req, res) {
    const nodemailer = require("nodemailer");

    // var transporter = nodemailer.createTransport({
    //   host: "smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: "3af7d24a0099ed",
    //     pass: "cdbb38441d198f",
    //   },
    //   debug: true, // show debug output
    //   logger: true, // log information in console
    // });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "buat.tubes.wbd@gmail.com",
        pass: "tubeswbd12",
      },
    });

    const mailOptions = {
      from: "buat.tubes.wbd@gmail.com",
      to: "jesicawngg@gmail.com",
      subject: "Request tambah stok",
      text: "Ada request buat nambah stok dorayaki tuh gan.Dicek yuk daftar requestnya",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    console.log("bisa kirim email woi");

    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.write("Hello World!");
    res.end();
  })
  .listen(8080);
