import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import reactLogo from '../../images/head.png'
import SideBarMenu from '../sidebar/SideBarMenu';

const Status = (props) => {
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
      label: 'Verify By',
      field: 'by',
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
      'by': 'NameFinance',
      'date': 'August 20,2020 10.30am',
      'status': <MDBBtn color="success" rounded size="sm">Pass</MDBBtn>
    },
    {
      'order': 2,
      'name': 'Jacob',
      'by': 'NameFinance',
      'date': 'August',
      'status': <MDBBtn color="success" rounded size="sm">Pass</MDBBtn>
    },
    {
      'order': 3,
      'name': 'Larry',
      'by': 'NameFinance',
      'date': 'August',
      'status': <MDBBtn color="success" rounded size="sm">Pass</MDBBtn>
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

export default Status;