import React, { Component } from 'react';
import * as firebase from 'firebase';
import DataDisplay from './DataDisplay.jsx';
import ControlPanel from './ControlPanel.jsx';

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
var temporaryClasses = [];

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
    this.handleSelect = this.handleSelect.bind(this);
    this.toggleOption = this.toggleOption.bind(this);

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
          rawUserData = {...this.state.users};
          rawUserData.data = temporaryUsers;
          this.setState({users: rawUserData});
          console.log('user data set', this.state.users.data);
        database.ref('/classes').once('value')
        .then((snapshot) => {
          console.log('got the class data', snapshot.val());
            var rawClassData = snapshot.val();
            for (var key in rawClassData) {
              if (rawClassData.hasOwnProperty(key)) {
                temporaryClasses.push(rawClassData[key]);
              }
            }
            rawClassData = {...this.state.classes};
            rawClassData.data = temporaryClasses;
            this.setState({classes: rawClassData})
            console.log('class data set', this.state.classes.data);
        })
    });
  });
  // retreives data, then stores into the state.selected's data array, by making a copy of the rest of the object. remember "nested state" and how to handle it.

  };

    handleSelect (value) {
      this.setState({selected: value});
    }

    toggleOption (property) {
      var stateCopy = {...this.state[this.state.selected]}
      stateCopy.show[property] = !stateCopy.show[property]; //stateCopy is good
      this.setState({[this.state.selected]: stateCopy})
    }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Header-Field">EDeeU</div>
          <div className="Header-Field">Admin Panel</div>
          <div className="Header-Field">AdminIcon</div>
        </div>

          <ControlPanel
            options={this.state[this.state.selected].show}
            onSelect={this.handleSelect}
            toggleOption={this.toggleOption}/>

        <DataDisplay data={this.state[this.state.selected]}/>
      </div>
    );
  }
}

export default App;
