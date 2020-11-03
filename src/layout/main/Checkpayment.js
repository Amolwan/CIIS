import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
// import firebase from 'firebase';
import firebase from '../../firebase/firebaseIndex';
import { ButtonBase } from '@material-ui/core';
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
    this.state = {datalist : []};
    this.database = firebase.database();
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }
  componentDidMount(){
   
    firebase.database().ref('Resercher/').on("value",snapshot => {
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
  }

  mySubmitHandler(event){
    event.preventDefault();
    console.log([event.target.id])
    console.log(this.state.datalist[event.target.id].note_id)
    firebase.database().ref('Resercher/').once("value",snapshot => {
      snapshot.forEach(snap => {
        if(snap.val().note_id == this.state.datalist[event.target.id].note_id)
        {
          if(snap.val().Status == "Unpaid")
          {
            let userRef = this.database.ref('Resercher/' + snap.key)
            userRef.update({'Status': "Paid"});
            return
          }
          else
          {
            let userRef = this.database.ref('Resercher/' + snap.key)
            userRef.update({'Status': "Unpaid"});
            return
          }
        }
      })
      // console.log(data.key)
    })
    alert("You are submitting " + this.state.datalist[event.target.id].Name);
  }
  
  render(){
    return (
      <div className="MainDiv">
        <div className="container">
            <table id="example" class="display table">
              <thead class="thead-dark">
                  <tr>
                      <th>Order No.</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th>Status Payment</th>
                  </tr>
              </thead>
              <tbody>  
              {this.state.datalist.map((data,index) => {
                // {console.log(index)}
                  return (
                      <tr> 
                        
                        {/* {console.log(data)} */}
                        <td>{data.Name}</td>
                        <td>{data.Name}</td>
                        <td>{data.Price}</td>
                        {/* <td>{data.Status}</td> */}
                        <td>{data.Date}</td>
                        <td><input style={{}} className="w3-input-transparent" type="submit" id={index} value={Btn(data.Status)}onClick={this.mySubmitHandler} /></td>

                      </tr> 
                  );
                  
                  })}
              
              
              </tbody>
           </table>
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