import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Form () {
  const [ user, setUser ] = useState( {
    id: "",
    name: "",
    email: "",
    phone: "",
    job: "" 
  } );

  
  const onInputChange =  (e)  =>
  {
   
    setUser( {...user , [e.target.name] : e.target.value  });

  };

  const onSubmit = ( e ) =>
  {
    e.preventDefault();
    const result = axios.post( 'http://localhost:3003/users', user);
    console.log(result);
  }

  
  return ( 
    <div className='container mt-5' id='home'>
      <div className='py-4'>
        <h1>Enter Details</h1>
        <hr />
        <br/>

        <form class="row g-4" onSubmit= {(e) => onSubmit(e)}>

        <div class="col-md-6">
            <label for="Name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              name="name"
              onChange={e => onInputChange(e)}
            />
        </div>
        
        
          
         <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
            <input
              type="email"
              placeholder="E-mail address"
              class="form-control"
              name='email'
              onChange={e => onInputChange(e)}
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
              onChange={e => onInputChange(e)}
            />
        </div>
          

          <div class="col-md-6">
            <label for="job" class="form-label">Job title</label>
            <select
              class="form-select"
              name='job'
              onChange={e => onInputChange(e)}
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
              class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
   );
}

export default Form;