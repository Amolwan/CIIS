import React from 'react';
import reactLogo from '../../images/head.png';
import SideBarMenu from '../sidebar/SideBarMenu';
import { auth } from '../../services/firebase';
import firebase from 'firebase';
import csv from 'csv';
import Dropzone from 'react-dropzone';
import Unpaid from './Allresearch';

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
        const type = data[i][2];
        const f_name = data[i][3];
        const l_name = data[i][4];
        const card_id = data[i][5];
        const nation = data[i][6];
        const email = data[i][7];
        var be_price = "0";
        var af_price = "0";
        var bank = "";

        if(type === 'Regular Full'){
            be_price = "10000";
            af_price = "12000";
        }
        else if (type === 'Regular Short'){
            be_price = "5000";
            af_price = "7000";
        }
        else if (type === 'Virtual Full'){
            be_price = "6000";
            af_price = "8000";   
        }
        else if (type === 'Virtual Short'){
            be_price = "3000";
            af_price = "5000";   
        }
        if(nation === 'Thai'){
            bank = "TMB";
        }
        else if(nation === "Foreign"){
            bank = "Paypal";
        }
        const newUser = { 
            "paper_id": paper_id, 
            "paper_name": paper_name,
            "type":type ,
            "f_name":f_name,
            "l_name":l_name,
            "card_id":card_id ,
            "nation":nation,
            "email":email,
            "be_price":be_price ,
            "af_price":af_price ,
            "Status" : "Unpaid",
            "Date" : new Date().toLocaleString('en-US', {
              timeZone: 'Asia/Bangkok'}),
            "bank" :bank
            
        };
        userList.push(newUser);
        console.log(userList)

        fetch('https://loginse-5c3bd.firebaseio.com/usersCCSV.json', {
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
  alert("สำเร็จ !");
}


  render(){
    return (
      
      
      
      <div class="page-content">
        <SideBarMenu/>
        <img src={reactLogo} alt="React logo" width="100%" />
  
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
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