const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
let aktifKullanici = null;
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/giris', (req, res) => res.sendFile(path.join(__dirname, 'views', 'garajim.html')));
app.get('/api/kullanici', (req, res) => res.json(aktifKullanici));
app.post('/api/kaydet', (req, res) => {
aktifKullanici = req.body;
res.json({ success: true });
});
app.listen(3000, () => console.log('Port: 3000'));