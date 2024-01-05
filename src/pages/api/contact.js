import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) {
    const {name, email, subject, message} = req.body;

    const user = process.env.EMAIL

    const transponder = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {

        const mail = await transponder.sendMail({
            from: user,
            to: "pejotanet@gmail.com",
            subject: subject,
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
            `,
        })

        console.log("message send:", mail.messageId);

        return res.status(200).json({ message: "success"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Could not send email."})
    }


    
}