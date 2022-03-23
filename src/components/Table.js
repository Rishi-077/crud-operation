import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillDelete } from "react-icons/ai";
import {FaUserEdit} from "react-icons/fa";
import axios from 'axios';
function TableContent()
{
  const [ users, setUser ] = useState( [] );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob ] = useState( "" )
  const [userId, setUserId ] = useState( null )  

  useEffect( () =>
  {
    loadUser();
  } )
 
    const loadUser = () =>
  {
    axios.get( `http://localhost:3003/users`)
      .then( ( res ) =>
      {
        setUser( res.data )
        // setName( res[0].name )
        // setEmail( res[0].email )
        // setPhone( res[0].phone )
        // setJob( res[0].job )
        // setId( res[0].id)
      } )
      .catch( ( e ) =>
      {
      console.log(alert("something went wrong (:"));
    })
  }

  const onRemoveHandler = (id) =>
  {
    const apis = axios.delete( `http://localhost:3003/users/${id}` );
    apis.filter( ( api ) =>
    {
      return api.id !== id;
     })
  }


  const selectUser = (id) =>
  {
    let item = users[ id - 1 ];
      
      setName(item.name)
      setEmail(item.email)
      setPhone(item.phone);
      setJob( item.job )
      setUserId(item.id)
  }
    
  const updateUser = (e) =>
  {
    e.preventDefault();
    const user = { userId, name, email, phone, job }
    console.log(user);
     axios.put( `http://localhost:3003/users/${userId}` )
       .then( ( res ) =>
       {  
         setUser( res.data );
         console.log(res.data)
       } )
      .catch( ( e ) =>
      {
      console.log(alert("something went wrong (:"));
    })
  }
  

  return ( 
    <div className="container" id='user'>
      <div className="py-4 mt-5">
        <table className="table caption-top">
  <caption className="display-5">List of users</caption>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Phone no</th>
      <th scope="col">job</th>
      <th scope="col">operation</th> 
    </tr>
  </thead>
  <tbody>
    {
      users.map( ( user, index ) => {
        return (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td> 
            <td>{user.phone}</td> 
            <td>{user.job}</td> 
            <td><button
              href="#update"
              onClick={() => selectUser(user.id)}
              type="button"
              class="btn btn-primary mx-4"><FaUserEdit /></button> 
              <button
                onClick={() => onRemoveHandler( user.id )} type="button"
                class="btn btn-danger"><AiFillDelete /></button></td>  
          </tr>
        );
      } )  
    }
  </tbody>
</table>
        


        {/* update form */}



        <div>
          <div className='container mt-5' id='home'>
      <div className='py-4'>
        <h1>update Details</h1>
        <hr />
        <br/>

        <form class="row g-4">

        <div class="col-md-6">
            <label for="Name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              name="name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
        </div>
        
        
          
         <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
            <input
              type="email"
              placeholder="E-mail address"
              class="form-control"
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
         </div>
          


        <div class="col-md-6">
          <label for="Phone no" class="form-label">Phone no</label>
            <input
              type="Phone no"
              placeholder="Phone"
              class="form-control"
              id="Number"
              name='phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
        </div>
          

          <div class="col-md-6">
            <label for="job" class="form-label">Job title</label>
            <select
              class="form-select"
              name='job'
              value={job}
              onChange={e => setJob(e.target.value)}
            >
              <option selected>select your job roles</option>
              <option value="Web Developer">Web Developer</option>
              <option value="App Developer">App Developer</option>
              <option value="Data analysis">Data analysis</option>
              <option value="Product manager">Product manager</option>

            </select>
        </div>
        
        <div class="col-12">
            <button
              type="submit"
              onClick= {updateUser}
              class="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
        </div>
      </div>
    </div>
       

   );
}

export default TableContent;