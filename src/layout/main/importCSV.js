import React from 'react';
import reactLogo from '../../images/head.png';
import SideBarMenu from '../sidebar/SideBarMenu';
import { auth } from '../../services/firebase';
import firebase from 'firebase';
import csv from 'csv';
import Dropzone from 'react-dropzone';

var userList = [];

class importCSV extends React.Component {
  

  onDrop = (files) => {
    this.setState({ files });

    var file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      csv.parse(reader.result, (err, data) => {

        for (var i = 1; i < data.length; i++) {
          const paper_id = data[i][0];
          const paper_name = data[i][1];
          const user = data[i][2];
          const email = data[i][3];
          const type_n = data[i][4];
          var be_price = "0";
          var af_price = "0";
          var type = "0";

          if (email !== 'Null') {
            auth().createUserWithEmailAndPassword(email, "1123456")
          }
          if (type_n === 'Regular Full') {
            type = "1";
            be_price = "10000";
            af_price = "12000";
          }
          else if (type_n === 'Regular Short') {
            type = "3";
            be_price = "5000";
            af_price = "7000";
          }
          else if (type_n === 'Virtual Full') {
            type = "2";
            be_price = "6000";
            af_price = "8000";
          }
          else if (type_n === 'Virtual Short') {
            type = "4";
            be_price = "3000";
            af_price = "5000";
          }
          const newUser = {
            "paper_id": paper_id,
            "paper_name": paper_name,
            "user": user,
            "email": email,
            "type_n": type_n,
            "type": type,
            "be_price": be_price,
            "af_price": af_price,
            "uid": auth().currentUser.uid
          };
          userList.push(newUser);
          //console.log(auth().currentUser.uid)
          fetch('https://loginse-5c3bd.firebaseio.com/usersCSV.json', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
          })
        };
      });
    };

    reader.readAsBinaryString(file);
  }




  render() {
    return (




      <div class="page-content">

        <SideBarMenu />
        <img src={reactLogo} alt="React logo" width="100%" />


        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <button><input {...getInputProps()} />
              Click me to upload a file!</button>
            </div>
          )}
        </Dropzone>


      </div>

    );
  }

};

export default importCSV;