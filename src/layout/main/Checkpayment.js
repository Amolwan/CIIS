import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
// import firebase from 'firebase';
// import firebase from '../../firebase/firebaseIndex';
import firebase from 'firebase';
import { auth } from '../../helpers/auth';
import { ButtonBase } from '@material-ui/core';
import reactLogo from '../../images/head.png'
import SideBarMenu from '../sidebar/SideBarMenu';


function Btn(data){
  if(data == "Unpaid")
  {
    return "Unpaid"
  }
  else
  {
    return "Paid"
  }
}

class Checkpayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {datalist : [],dataUser: []};
    this.database = firebase.database();
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.mySubmitUser = this.mySubmitUser.bind(this);
  }
  componentDidMount(){
   
    firebase.database().ref('usersCCSV/').on("value",snapshot => {
      let Resercherlist = [];
      snapshot.forEach(snap => {
        if(snap.val().Status == "Unpaid" || snap.val().Status == "Paid")
        {
          Resercherlist.push(snap.val());
        }
        // {console.log(snap.key)}
      })
      // console.log(Resercherlist);
      this.setState({datalist : Resercherlist});
    })
    firebase.database().ref('usersCCSV/').on("value",snapshot => {
      let Resercherlist = [];
      snapshot.forEach(snap => {
          Resercherlist.push(snap.val());
        // {console.log(snap.key)}
      })
      // console.log(Resercherlist);
      this.setState({dataUser : Resercherlist});
    })
  }

  

  mySubmitHandler(event){
    event.preventDefault();
    console.log([event.target.id])
    console.log(this.state.datalist[event.target.id].note_id)
    
    firebase.database().ref('usersCCSV/').once("value",snapshot => {
      snapshot.forEach(snap => {
        if(snap.val().paper_name == this.state.datalist[event.target.id].paper_name)
        {
          if(snap.val().Status == "Unpaid")
          {
            let userRef = this.database.ref('usersCCSV/' + snap.key)
            userRef.update({'Status': "Paid"});
            userRef.update({'Status_AD': "0"});
            userRef.update({'admin' : firebase.auth().currentUser.email})
            return
          }
          else
          {
            let userRef = this.database.ref('usersCCSV/' + snap.key)
            userRef.update({'Status': "Unpaid"});
            userRef.update({'Status_AD': "0"});
            return
          }
        }
      })
      // console.log(data.key)
    })
    alert("You are submitting " + this.state.datalist[event.target.id].f_name);
  }
  mySubmitUser(event){
    // event.preventDefault();
    // console.log([event.target.id])
    // console.log(this.state.datalist[event.target.id].note_id)
    
    // firebase.database().ref('User/').once("value",snapshot => {
    //   snapshot.forEach(snap => {
    //     if(snap.val().id === this.state.dataUser[event.target.id].id && snap.val().fname === this.state.dataUser[event.target.id].fname)
    //     {
    //       if(snap.val().paid.status === "0")
    //       {
    //         let userRef = this.database.ref('User/' + snap.key)
    //         userRef.update({'status': "2"});
    //         userRef.update({'Status_AD': "0"});
    //         userRef.update({'admin' : firebase.auth().currentUser.email})

    //         return
    //       }
    //       else
    //       {
    //         let userRef = this.database.ref('User/' + snap.key)
    //         userRef.update({'Status': "Unpaid"});
    //         userRef.update({'Status_AD': "0"});
    //         return
    //       }
    //     }
    //   })
    //   // console.log(data.key)
    // })
    // alert("You are submitting " + this.state.datalist[event.target.id].f_name);
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
                      <th>Price</th>
                      {/* <th>Date</th> */}
                      <th>Status Payment</th>
                      {/* <th>Late</th> */}
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
                        <td>{data.be_price}</td>
                        {/* <td>{data.Status}</td> */}
                        
                        {/* <td>{data.Date}</td> */}
                        <td><input style={{}} className="w3-input-transparent" type="submit" id={index} value={Btn(data.Status)}onClick={this.mySubmitHandler} /></td>
                        {/* <td><input style={{}} className="w3-input-transparent" type="submit" id={index} value={("Email")}onClick={this.mySubmitHandler} /></td> */}

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
  // return(
  //   <MDBTable btn>
  //     <MDBTableHead columns={columns} />
  //     <MDBTableBody rows={rows_rounded_btn} />
  //   </MDBTable>
  // );
};

export default Checkpayment;