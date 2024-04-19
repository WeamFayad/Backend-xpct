const User = require('../models/user.model');

async function createUser(req, res) {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ message: 'Name, email, and age are required to create a user' });
    }

    if (typeof age !== 'number' || age < 0 || age > 100) {
      return res.status(400).json({ message: 'Age must be a number between 0 and 100' });
    }

    const user = await User.create({ name, email, age });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

async function updateUser(req, res) {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    await res.user.remove();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
