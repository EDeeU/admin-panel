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
            profile_image: false,
            user_email: true,
            user_id: true,
            user_name: true,
            user_schools: false,
            user_url: true
          }
      },
      classes: {
          data: null,
          show: {
            Code: true,
            Description: true,
            Subject: true,
            Title: true
          }
      }
    };

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('sign in success');
        database.ref('/users').once('value')
      .then((snapshot) => {
          var rawUserData = snapshot.val();
          for (var key in rawUserData) {
            if (rawUserData.hasOwnProperty(key)) {
              temporaryUsers.push(rawUserData[key]);
            }
          }
        rawUserData = {...this.state[this.state.selected]};
        rawUserData.data = temporaryUsers;
        this.setState({users: rawUserData});
      })
      .catch((error) => {
        console.log('error retrieving data', error);
      })
      })
      .catch(function(error) {
      console.log('err sign in', error);
      });
  }//retreives data, then stores into the state.selected's data array, by making a copy of the rest of the object. remember "nested state" and how to handle it.

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Data selector and options panel here</h2>
        </div>
        <DataDisplay data={this.state[this.state.selected]}/>
      </div>
    );
  }
}

export default App;
