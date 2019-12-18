import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyA781EI4xjgSkUJ9dKmeBBf5HrtZhbkRZs',
    authDomain: 'react-auth-afa69.firebaseapp.com',
    databaseURL: 'https://react-auth-afa69.firebaseio.com',
    projectId: 'react-auth-afa69',
    storageBucket: 'react-auth-afa69.appspot.com',
    messagingSenderId: '1:63258755562:web:cc66c9aa790d3c07673293'
}

firebase.initializeApp(config)

export default firebase