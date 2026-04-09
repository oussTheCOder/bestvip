import type { NextApiRequest, NextApiResponse } from 'next';
import { generateWhatsAppLink } from '../../utils/whatsapp';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER || '+19295664890';
  const message = 'Hello, I am interested in your IPTV service.';

  if (req.method === 'GET') {
    const url = generateWhatsAppLink(whatsappNumber, message);
    res.redirect(url);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}