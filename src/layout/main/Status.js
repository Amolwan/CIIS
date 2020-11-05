import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
// import firebase from 'firebase';
// import firebase from '../../firebase/firebaseIndex';
// import { auth } from 'firebase';
import firebase from 'firebase';
import { auth } from '../../helpers/auth';
import reactLogo from '../../images/head.png'
import SideBarMenu from '../sidebar/SideBarMenu';


class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {datalist : []};
    this.database = firebase.database();
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }
  componentDidMount(){
   
    firebase.database().ref('usersCCSV/').on("value",snapshot => {
      let Resercherlist = [];
      snapshot.forEach(snap => {
        if(snap.val().Status == "Paid" && snap.val().Status_AD == "0" )
        {

          Resercherlist.push(snap.val());
    
        
        }
        // {console.log(snap.key)}
      })
      // console.log(Resercherlist);
      this.setState({datalist : Resercherlist});
    })
  }

  mySubmitHandler(event){
    event.preventDefault();
    console.log([event.target.id])
    console.log(this.state.datalist[event.target.id].note_id)
    firebase.database().ref('usersCCSV/').on("value",snapshot => {
      snapshot.forEach(snap => {
        if(snap.val().paper_name == this.state.datalist[event.target.id].paper_name)
        {
            let userRef = this.database.ref('usersCCSV/' + snap.key)
            userRef.update({'Status': "Paid"});
            userRef.update({'Status_AD' : "1"});
           
        }

      })
      // console.log(data.key)
    })
    alert("You are submitting " + this.state.datalist[event.target.id].f_name);
  }
  
  render(){
    return (
      <div  class="page-content">
    <SideBarMenu/>
   <img src={reactLogo} alt="React logo" width="100%" />
      <div className="MainDiv">
        <div className="container">
            <table id="example" class="display table">
              <thead class="thead-dark">
                  <tr>
                      <th>Order No.</th>
                      <th>Name</th>
                      <th>Verify by</th>
                      {/* <th>Date</th> */}
                      <th>Status Payment</th>
                  </tr>
              </thead>
              <tbody>  
              {this.state.datalist.map((data,index) => {
                // {console.log(index)}
                  return (
                      <tr> 
                        
                        {/* {console.log(data)} */}
                        <td>{data.paper_id}</td>
                        <td>{data.f_name +" "+ data.l_name}</td>
                        {/* {<td>{firebase.auth().currentUser.uid}</td>} */}
                        <td>{data.admin}</td>
                        {/* <td>{data.Date}</td> */}
                        <td><input style={{}} className="w3-input-transparent" type="submit" id={index} value={'Pass'} onClick={this.mySubmitHandler}/></td>

                      </tr> 
                  );
                  
                  })}
              
              
              </tbody>
           </table>
       </div>
      </div>
      </div>
    );
  }
  
};

export default Status;