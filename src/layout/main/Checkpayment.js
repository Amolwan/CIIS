import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBInput  } from 'mdbreact';

const Checkpayment = (props) => {
  const columns= [
    {
      label: '',
      field: 'select',
      sort: 'asc'
    },
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
      'select': <MDBInput
      filled
      type='checkbox'
      id='checkbox1'
      size="sm"/>,
      'order': 1,
      'name': 'Name Researcher1',
      'price': '12000',
      'date': '-',
      'status': <MDBBtn color="danger" rounded size="sm">UnPaid</MDBBtn>
    },
    {
      'select': <MDBInput
      filled
      type='checkbox'
      id='checkbox1'
      size="sm"/>,
      'order': 2,
      'name': 'Name Visiter',
      'price': '8000',
      'date': '-',
      'status': <MDBBtn color="danger" rounded size="sm">Unpaid</MDBBtn>
    },
    {
      'select': <MDBInput disabled type="checkbox" id="checkbox3" size="sm" />,
      'order': 3,
      'name': 'Name Visiter',
      'price': '8000',
      'date': 'August 20,2020 10.30am',
      'status': <MDBBtn color="success" rounded size="sm">Paid</MDBBtn>
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