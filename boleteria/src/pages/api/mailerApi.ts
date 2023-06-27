
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { getFirestore, collection, query, getDocs, where } from 'firebase/firestore';
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

    const db = getFirestore(app);
    const usersCollectionRef = collection(db, 'users');
    const usersQuery = query(usersCollectionRef, where('email', '==', email));
    const usersSnapshot = await getDocs(usersQuery);

    if (!usersSnapshot.empty) {
      const userDoc = usersSnapshot.docs[0];
      const recipientEmail = userDoc.data().email;

      // Obtén los documentos en la colección "dataTickets" relacionados con el usuario
      const dataTicketsCollectionRef = collection(db, 'dataTickets');
      const dataTicketsQuery = query(dataTicketsCollectionRef, where('userId', '==', userDoc.id));
      const dataTicketsSnapshot = await getDocs(dataTicketsQuery);

      if (!dataTicketsSnapshot.empty) {
        let mailText = 'Este correo es enviado por la empresa de buses de la UNA para hacerle ver los datos de su tiquete, muchas gracias por elegir nuestro servicio!\n\n';

        dataTicketsSnapshot.forEach((doc) => {
          const dataTicketsData = doc.data();

          const {
            arrivalTime,
            dateTravel,
            departureTime,
            destination,
            hours,
            origin,
            passengerName,
            qr,
            seatNumber,
          } = dataTicketsData;

          mailText +=
            `Hora de llegada: ${arrivalTime}\n` +
            `Fecha de viaje: ${dateTravel}\n` +
            `Hora de salida: ${departureTime}\n` +
            `Destino: ${destination}\n` +
            `Horas: ${hours}\n` +
            `Origen: ${origin}\n` +
            `Nombre de pasajero: ${passengerName}\n` +
            `Número QR: ${qr}\n` +
            `Número de asiento: ${seatNumber}\n\n`;
        });

        const mailOptions = {
          from: 'boleteria.online.una@gmail.com',
          to: recipientEmail,
          subject: 'Datos de Tiquetes',
          text: mailText,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado:', info.messageId);

        res.status(200).json({ message: 'Correo electrónico enviado' });
      } else {
        res.status(404).json({ error: 'No se encontraron documentos en la colección "dataTickets" relacionados con el usuario' });
      }
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
}