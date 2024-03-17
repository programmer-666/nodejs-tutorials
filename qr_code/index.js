import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer.prompt(
    [{
        message: "URL: ",
        name: "URL"
    }
    ]).then((answ) => {
        var qr_svg = qr.image(answ.URL);
        qr_svg.pipe(fs.createWriteStream("qr.png"));
    }).catch((err) => {
        if (err) throw err;
    });
