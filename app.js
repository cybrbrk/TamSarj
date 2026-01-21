const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'tamsarj-gizli-anahtar',
    resave: false,
    saveUninitialized: true
}));

let aktifKullanici = {};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/giris', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'garajim.html'));
});

app.get('/karsilastir', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'karsilastir.html'));
});

app.get('/sarj-noktalari', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sarj-noktalari.html'));
});

app.get('/haberler', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'haberler.html'));
});

app.get('/hakkimizda', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'hakkimizda.html'));
});

app.post('/api/kaydet', (req, res) => {
    aktifKullanici = req.body;
    res.json({ success: true });
});

app.get('/api/kullanici', (req, res) => {
    res.json(aktifKullanici);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda calisiyor...`);
});