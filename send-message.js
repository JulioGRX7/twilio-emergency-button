const twilio = require('twilio');

const accountSid = 'AC8fa5beab4c21f978949e39217776a5f1';
const authToken = '2bc1922c2e58c9b79e9cc6ad7cb4734f';

const client = new twilio(accountSid, authToken);

exports.handler = async function(event, context) {
  try {
    const message = await client.messages.create({
      body: '⚠ ¡Emergencia! Tu contacto necesita ayuda urgentemente. ⚠ Utiliza el GPS para llegar a su ubicación: https://play.google.com/store/apps/details?id=uni.UNI9EB4CF0',
      from: 'whatsapp:+14155238886', // Número de Twilio para WhatsApp Business
      to: 'whatsapp:+5215591944890'   // Número de destino
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sid: message.sid })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
