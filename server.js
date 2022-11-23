import express from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6lcJiFeEzPPZXtFEPN8qJNmsV17aKwGI",
  authDomain: "integrador-64c09.firebaseapp.com",
  projectId: "integrador-64c09",
  storageBucket: "integrador-64c09.appspot.com",
  messagingSenderId: "396343937267",
  appId: "1:396343937267:web:2d88e87def6c26c32c4f86"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore()

// Inicializar el server
const app = express()

// Inicializamos el MIddleware
app.use(express.static('public'))
app.use(express.json())

// Rutas del backend
// Rutas Home
app.get('/', (req, res) =>{
    res.sendFile('index.html', {root: 'public'})
})

// Arrancamos el server
const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log(`Server in Port: ${Port}`)
})