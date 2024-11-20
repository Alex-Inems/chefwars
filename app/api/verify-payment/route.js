// pages/api/verify-payment.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { reference } = req.body;
    try {
      const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      });

      if (response.data.status === 'success') {
        res.status(200).json({ status: 'success', data: response.data.data });
      } else {
        res.status(400).json({ status: 'failed', message: 'Verification failed' });
      }
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
