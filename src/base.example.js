import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'

const config = {
    apiKey: "your api key",
    authDomain: "your auth domain",
    databaseURL: "your....",
    projectId: "your ..",
    storageBucket: "your ..",
    messagingSenderId: "your .."
};
const app = firebase.initializeApp(config); 

const db = app.database

export default Rebase.createClass(db)