import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import userData from './Data'


function TableContent()
{

  return ( 
    <div className="container">
      <div className="py-4 px-4">
        <table className="table caption-top">
  <caption className="display-5">List of users</caption>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email ID</th>
      <th scope="col">Phone no</th>
      <th scope="col">Website</th>
              
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>@Otto</td>
      <td>Rishikesan@gmail.com</td>
      <td>222-2222-222</td>
      <td>@n</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
   );
}

export default TableContent;