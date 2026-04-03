export default function handler(req, res) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER; // Ensure this is set in your environment variables
  const message = "Hello, I am interested in your legal IPTV service.";
  
  if (req.method === 'GET') {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    res.redirect(url);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}