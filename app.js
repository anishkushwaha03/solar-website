const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Contact = require('./models/Contact');

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB error:", err));

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/services', (req, res) => res.render('services'));
app.get('/contact', (req, res) => res.render('contact'));

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await Contact.create({ name, email, message });
    res.send('✅ Thank you for contacting us!');
  } catch (err) {
    res.status(500).send('❌ Error saving your message.');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
