import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER || '';
  const message = 'Hello, I am interested in your IPTV service.';

  if (req.method === 'GET') {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    res.redirect(url);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}