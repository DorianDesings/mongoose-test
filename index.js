const express = require('express');
const app = express();

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const UserModel = require('./schemas/user-schema');

// SCHEME: Formato que toman los datos, tantos esquemas como entidades
// MODELO: Compilación del esquema que sirve para trabajar con la base de datos

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to database');
  } catch (err) {
    console.error(`Connection error`);
  }
  app.listen(
    process.env.PORT,
    console.log(`Server listen on port ${process.env.port}`)
  );
};

app.get();

startServer();
