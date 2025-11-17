// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/firebaseUsers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB error:', err));

// ✅ Create a schema for users
const userSchema = new mongoose.Schema({
  uid: String,
  name: String,
  email: String,
  photoURL: String,
});

const User = mongoose.model('User', userSchema);

// ✅ API to save user
app.post('/save-user', async (req, res) => {
  const { uid, name, email, photoURL } = req.body;

  try {
    let user = await User.findOne({ uid });

    if (!user) {
      user = new User({ uid, name, email, photoURL });
      await user.save();
      console.log('🆕 User saved to MongoDB');
    }

    res.status(200).send({ message: 'User saved or already exists' });
  } catch (error) {
    console.error('❌ Error saving user:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
