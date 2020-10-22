import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

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
      label: 'Status',
      field: 'status',
      sort: 'asc'
    }

  ];

  const rows_rounded_btn = [
    {
      'order': 1,
      'name': 'Name Researcher1',
      'nameresearch': 'Chatbot',
      'price': '12000',
      'status': <MDBBtn color="danger" rounded size="sm">UnPaid</MDBBtn>
    },
    {
      'order': 2,
      'name': 'Name Visiter',
      'nameresearch': '-',
      'price': '8000',
      'status': <MDBBtn color="danger" rounded size="sm">Unpaid</MDBBtn>
    },
    {
      'order': 3,
      'name': 'Name Visiter',
      'nameresearch': '-',
      'price': '8000',
      'status': <MDBBtn color="success" rounded size="sm">Pass</MDBBtn>
    }
  ];

  return(
    <MDBTable btn>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_rounded_btn} />
    </MDBTable>
  );
};

export default Checkpayment;