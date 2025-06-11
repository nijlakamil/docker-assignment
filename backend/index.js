const express = require('express');
const connectDB = require('./db');
const Task = require('./taskModel');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { title } = req.body;
  const task = new Task({ title });
  await task.save();
  res.send('Task added!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
