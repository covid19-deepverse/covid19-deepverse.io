import firebase from 'firebase/app'

import '@firebase/firestore';
const config = {
  apiKey: "AIzaSyAX3ezypp_7BqtMGNzArqNzQqqQvjdReFk",
  authDomain: "web-covid-api.firebaseapp.com",
  databaseURL: "https://web-covid-api.firebaseio.com",
  projectId: "web-covid-api",
  storageBucket: "web-covid-api.appspot.com",
  messagingSenderId: "906523259916",
  appId: "1:906523259916:web:df810b9fc27fd17451aa29"
};
class Database{

    constructor() {
      if (!firebase.apps.length) {
          firebase.initializeApp(config);
            console.log("firebase apps initializeApp");
      } else {
          console.log("firebase apps already running...");
      }
    }
    
    async readdata(read_Blog_success,read_Blog_fail)
    {
      let Array=[]
      let getDoc =await firebase.firestore().collection("Blog").get().then(snapshot => {
        snapshot.forEach(doc => {
          
          Array.push(doc.data())
          
        });
        read_Blog_success(Array);
      }).catch(err => {
        read_Blog_fail('Error getting documents', err);
      });
    }
    async UpdateShow(id,Show){
      const res = await firebase.firestore().collection("Blog").doc(id).update({
       Show:!Show
      });
    }

}
const database = new Database();
export default database;
