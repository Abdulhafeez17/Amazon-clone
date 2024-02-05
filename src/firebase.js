import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD04mO-JfX7cNL3AHqTXwIIFZ1tZGgMxco",
  authDomain: "clone-8e46c.firebaseapp.com",
  databaseURL: "https://clone-8e46c.firebaseio.com",
  projectId: "clone-8e46c",
  storageBucket: "clone-8e46c.appspot.com",
  messagingSenderId: "674494200235",
  appId: "1:674494200235:web:f8ddbdbf1ba5063a5d7aee",
  measurementId: "G-3HEHQY7CNG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// ! this will initialize the dataBase
const db = firebaseApp.firestore()
const auth = firebase.auth();

export {auth,db};