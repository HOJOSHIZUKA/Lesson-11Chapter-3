import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC82oRBhmSIwVoKRRhGaXFNJlWf2EejRy4",
  authDomain: "vite-project-8d9dd.firebaseapp.com",
  projectId: "vite-project-8d9dd",
  storageBucket: "vite-project-8d9dd.appspot.com",
  messagingSenderId: "988455318635",
  appId: "1:988455318635:web:1f8cd049829c61d80bad2e",
  measurementId: "G-D0DR1KFCM3"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); 
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount('#app')
