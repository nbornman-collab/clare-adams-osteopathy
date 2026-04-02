const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Simple booking form handler (logs to console, could email in production)
app.post('/api/book', (req, res) => {
  const { name, email, phone, location, type, message } = req.body;
  console.log('Booking request:', { name, email, phone, location, type, message, ts: new Date().toISOString() });
  res.json({ ok: true, message: 'Thank you — Clare will be in touch within 24 hours.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Clare Adams Osteopathy running on port ${PORT}`));
