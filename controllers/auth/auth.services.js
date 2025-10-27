const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../../models/users.model');
const moment = require('moment');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

exports.login = async (email, password) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) {
    throw new Error('email not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '1d',
  });

  return { token, user: { id: user.id, email: user.email } };
};

exports.register = async (name, email, password) => {
  try{
  const user = await Users.findOne({ where: { email } });

  if (user && user.email) {
    throw new Error('email already in use');
  }
  const hashedPassword = await hashPassword(password);
  const createAt = moment().format("YYYY-MM-DD HH:mm:ss");

  const newUser = await Users.create({
    id: 0,
    name: name,
    email: email,
    password: hashedPassword,
  });
  return { id: newUser.id, email: newUser.email };
  }catch(err){
    throw err;
  }
  
}

async function hashPassword(plainPassword) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}