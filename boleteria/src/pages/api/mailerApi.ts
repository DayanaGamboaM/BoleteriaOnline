import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../fireBase/app';

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

    const db = getFirestore(app);
    const usersCollectionRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollectionRef);

    usersSnapshot.forEach(async (userDoc) => {
      const recipientEmail = userDoc.data().email;

      const mailOptions = {
        from: 'boleteria.online.una@gmail.com',
        to: recipientEmail,
        subject: 'Datos de Tiquetes',
        text:
          'Este correo es enviado por la empresa de buses de la UNA para hacerle ver los datos de su tiquete, muchas gracias por elegir nuestro servicio',
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Correo electrónico enviado:', info.messageId);
    });

    res.status(200).json({ message: 'Correos electrónicos enviados' });
  } catch (error) {
    console.error('Error al enviar los correos electrónicos:', error);
    res.status(500).json({ error: 'Error al enviar los correos electrónicos' });
  }
}
