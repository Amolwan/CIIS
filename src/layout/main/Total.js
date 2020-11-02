import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import reactLogo from '../../images/head.png'
import SideBarMenu from '../sidebar/SideBarMenu';

const Total = (props) => {
  const columns= [
    {
      label: 'Order No',
      field: 'order',
      sort: 'asc'
    },
    {
      label: 'Name',
      field: 'name',
      sort: 'asc'
    },
    {
      label: 'Name Research',
      field: 'nameresearch',
      sort: 'asc'
    },
    {
      label: 'Price',
      field: 'price',
      sort: 'asc'
    },
    {
      label: 'Payment Method',
      field: 'method',
      sort: 'asc'
    }

  ];

  const rows_rounded_btn = [
    {
      'order': 1,
      'name': 'Name Researcher1',
      'nameresearch': 'Chatbot',
      'price': '12000',
      'method': 'TMB'
    },
    {
      'order': 2,
      'name': 'Name Visiter',
      'nameresearch': '-',
      'price': '8000',
      'method': 'TMB'
    },
    {
      'order': 3,
      'name': 'Name Visiter',
      'nameresearch': '-',
      'price': '8000',
      'method': 'Paypal'
    }
  ];

  return(
    <div  class="page-content">
    <SideBarMenu/>
   <img src={reactLogo} alt="React logo" width="100%" />
    <MDBTable btn>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_rounded_btn} />
    </MDBTable>
    </div>
  );
};

export default Total;