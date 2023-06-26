import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
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

    const { email } = req.query; // Obtén el correo electrónico del usuario desde la URL de la solicitud
    console.log('Valor del correo electrónico:', email);

    const db = getFirestore(app);
    const usersCollectionRef = collection(db, 'users');
    const usersQuery = query(usersCollectionRef, where('email', '==', email));
    const usersSnapshot = await getDocs(usersQuery);

    if (!usersSnapshot.empty) {
      const userDoc = usersSnapshot.docs[0];
      const recipientEmail = userDoc.data().email;

      const mailOptions = {
        from: 'boleteria.online.una@gmail.com',
        to: recipientEmail,
        subject: 'Datos de Tiquetes',
        text:
          'Este correo es enviado por la empresa de buses de la UNA para hacerle ver los datos de su tiquete, muchas gracias por elegir nuestro servicio',
      };

      const info = await transporter.sendMail(mailOptions);
      //console.log('Correo electrónico enviado:', info.messageId);

      res.status(200).json({ message: 'Correo electrónico enviado' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
}
