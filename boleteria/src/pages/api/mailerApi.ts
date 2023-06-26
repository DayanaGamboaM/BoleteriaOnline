// api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'boleteria.online.una@gmail.com',
        pass: 'ozhktlnkqllootxb',
      },
    });

    const mailOptions = {
      from: 'boleteria.online.una@gmail.com',
      to: 'cristoferb.bils@gmail.com',
      subject: 'Datos de Tiquetes',
      text:
        'Este correo es enviado por la empresa de buses de la UNA para hacerle ver los datos de su tiquete, muchas gracias por elegir nuestro servicio',
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado:', info.messageId);

    res.status(200).json({ message: 'Correo electrónico enviado' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
}