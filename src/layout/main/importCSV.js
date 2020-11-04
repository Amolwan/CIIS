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
        const type = data[i][4];
        var be_price = "0";
        var af_price = "0";


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
        const newUser = { 
            "paper_id": paper_id, 
            "paper_name": paper_name,
            "user":user,"email":email,
            "type":type ,
            "be_price":be_price ,
            "af_price":af_price
        };
        userList.push(newUser);
        console.log(userList)

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