import './table.scss'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function createData(id,name, img, customer, date, amount) {
  return { id, name, img, customer, date, amount };
}


const rows = [
  createData(1,'Frozen yoghurt', "https://deportesregol.com/wp-content/uploads/2018/05/0761_Balon_Golty_MicroFutbol_Pro_Dorado_-247x247.jpg","Joe", "1 march", 740),
  createData(2,'Ice cream sandwich', "https://deportesregol.com/wp-content/uploads/2018/05/0761_Balon_Golty_MicroFutbol_Pro_Dorado_-247x247.jpg", "Joe", "1 march", 740),
  createData(3,'Eclair', "https://deportesregol.com/wp-content/uploads/2018/05/0761_Balon_Golty_MicroFutbol_Pro_Dorado_-247x247.jpg" ,"Joe", "1 march", 740),
  createData(4,'Cupcake', "https://deportesregol.com/wp-content/uploads/2018/05/0761_Balon_Golty_MicroFutbol_Pro_Dorado_-247x247.jpg" ,"Joe", "1 march", 740),
  createData(5,'Gingerbread', "https://deportesregol.com/wp-content/uploads/2018/05/0761_Balon_Golty_MicroFutbol_Pro_Dorado_-247x247.jpg","Joe", "1 march", 740),
];

function List({products, customer}) {

  if(products.length === 0){
    return (<div className='notFound'>
      <div><AddShoppingCartIcon className='icon'/></div>
      <h2 className='text'>You have not bought products yet, go ahead!</h2>
    </div>)
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, i) => (
            <TableRow
              key={row.id}
            >
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.image} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{customer ? customer.name : ""}</TableCell>
              <TableCell className="tableCell">{row.createdAt}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List