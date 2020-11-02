import React,{useState,useEffect} from 'react'
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import reactLogo from '../../images/head.png'
import SideBarMenu from '../sidebar/SideBarMenu';
import {CheckStatus} from './MainContent'
import { auth,db } from '../../services/firebase';
class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {datalist : [],status:false};
    // this.database = db();
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }
  async componentDidMount(){
  // await this.setState({status:CheckStatus()})
    
  //  this.setState({status:await CheckStatus()})
    db.ref('Resercher/').on("value",snapshot => {
      let Resercherlist = [];
      snapshot.forEach(snap => {
        if(snap.val().Status === "Unpair")
        {
          Resercherlist.push(snap.val());
        }
        // {console.log(snap.key)}
      })
      // console.log(Resercherlist);
      this.setState({datalist : Resercherlist});
    })

    console.log(this.state.status)
  }

  mySubmitHandler(event){
    event.preventDefault();
    console.log([event.target.id])
    console.log(this.state.datalist[event.target.id].note_id)
    db.ref('Resercher/').on("value",snapshot => {
      snapshot.forEach(snap => {
        if(snap.val().note_id == this.state.datalist[event.target.id].note_id)
        {
            let userRef = this.database.ref('Resercher/' + snap.key)
            userRef.update({'Status': "Pay"});
        }
      })
      // console.log(data.key)
    })
    alert("You are submitting " + this.state.datalist[event.target.id].Name);
  }
  
  render(){
    return (
      
      
      
      <div class="page-content">
        <SideBarMenu/>
        <div className="container">
            <table id="example" class="display table">
              <thead class="thead-dark">
                  <tr>
                      <th>Order No.</th>
                      <th>Name</th>
                      <th>Verify by</th>
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
                        <td><input style={{}} className="w3-input-transparent" type="submit" id={index} value={data.Status} onClick={this.mySubmitHandler}/></td>

                      </tr> 
                  );
                  
                  })}
              
              
              </tbody>
           </table>
       </div>
      </div>
    );
  }
  
};

export default Status;