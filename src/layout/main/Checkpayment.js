import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import reactLogo from '../../images/head.png'
import SideBarMenu from '../sidebar/SideBarMenu';

const Checkpayment = (props) => {
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
      label: 'Price',
      field: 'price',
      sort: 'asc'
    },
    {
      label: 'Date',
      field: 'date',
      sort: 'asc'
    },
    {
      label: 'Status Payment',
      field: 'status',
      sort: 'asc'
    }

  ];

  const rows_rounded_btn = [
    {
      'order': 1,
      'name': 'Name Researcher1',
      'price': '12000',
      'date': '-',
      'status': <MDBBtn color="danger" rounded size="sm">UnPaid</MDBBtn>
    },
    {
      'order': 2,
      'name': 'Name Visiter',
      'price': '8000',
      'date': '-',
      'status': <MDBBtn color="danger" rounded size="sm">Unpaid</MDBBtn>
    },
    {
      'order': 3,
      'name': 'Name Visiter',
      'price': '8000',
      'date': 'August 20,2020 10.30am',
      'status': <MDBBtn color="success" rounded size="sm">Paid</MDBBtn>
    }
  ];

  return(
    <div >
       <SideBarMenu/>
      <img src={reactLogo} alt="React logo" width="100%" />
    <MDBTable btn>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_rounded_btn} />
    </MDBTable>
    </div>
  );
};

export default Checkpayment;