const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/getusers', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/getuser/:id', async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/newuser', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.put('/user/:id', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.delete('/user/:id', async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ id: req.params.id });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/getrandomuser', async (req, res) => {
    try {
        const count = await User.countDocuments();
        const random = Math.floor(Math.random() * count);
        const user = await User.findOne().skip(random);
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
