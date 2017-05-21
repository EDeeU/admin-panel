import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import * as firebase from 'firebase';
import DataDisplay from './DataDisplay.jsx'

var config = {
  apiKey: "AIzaSyDmk-_zhzIH8RBj2o84_lMsb86SVh6VM6w",
  authDomain: "edeeu-3a2ec.firebaseapp.com",
  databaseURL: "https://edeeu-3a2ec.firebaseio.com",
  storageBucket: "edeeu-3a2ec.appspot.com",
  messagingSenderId: "759117132895"
};
firebase.initializeApp(config);
const database = firebase.database();
const email = 'chan.kwon117@gmail.com', password='edeeu4life';

var temporaryUsers = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'users',
      users: {
          data: null,
          show: {
            profile_image: true,
            user_email: true,
            user_id: true,
            user_name: true,
            user_schools: true,
            user_url: true
          }
      },
      classes: {
          data: null,
          show: {
            code: true,
            description: true,
            subject: true,
            title: true
          }
      }
    };

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('sign in success');
        database.ref('/users').once('value')
      .then((snapshot) => {
        //snapshot.val() is an object with each key being a person, that key is also inside the user.user_id
        //convert to array here and store in state
          var rawUserData = snapshot.val();
          console.log('rawUserData', rawUserData);
          for (var key in rawUserData) {
            if (rawUserData.hasOwnProperty(key)) {
              temporaryUsers.push(rawUserData[key]);
            }
          }
        rawUserData = {...this.state[this.state.selected]};
        rawUserData.data = temporaryUsers;
        this.setState({users: rawUserData});
          console.log('this.state.userData is', this.state.users.userData);
      })
      .catch((error) => {
        console.log('error retrieving data', error);
      })
      })
      .catch(function(error) {
      console.log('err sign in', error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Data selector and options panel here</h2>
        </div>
        <DataDisplay data={this.state[this.state.selected].data} show={this.state[this.state.selected].show}/>
      </div>
    );
  }
}

export default App;
