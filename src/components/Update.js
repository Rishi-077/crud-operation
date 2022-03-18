import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Update ()
{
  const [ users, setUser ] = useState( [] );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob ] = useState( "" )

  //  const loadUser = () =>
  // {
  //   axios.get( `http://localhost:3003/users`)
  //     .then( ( res ) =>
  //     {
  //       setUser(res.data);
  //     } )
  //     .catch( ( e ) =>
  //     {
  //     console.log(alert("something went wrong (:"));
  //   })
  // }

    function selectUser(id)
    {
      // let item=users[id-1];
      setName(users.name)
          setEmail(users.email)
          setPhone(users.phone);
          setJob(users.job)
    }
    
  function updateUser()
  {
    let item={name,phone,email,job}
    console.warn( "item", item )
     axios.get( `http://localhost:3003/users/${users}`)
      .then( ( res ) =>
      {
        setUser(res.data);
      } )
      .catch( ( e ) =>
      {
      console.log(alert("something went wrong (:"));
      } )
    
    
    
  }

  const onSubmit = ( e ) =>
  {
    e.preventDefault();
    axios.put(`http://localhost:3003/users/${users}`) ;
  }

  
  return ( 
    <div className='container mt-5' id='update'>
      <div className='py-4'>
        <h1>Update Details</h1>
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
              value={name}
              onChange={e => setName(e.target.value)}
            />
        </div>
        
        
          
         <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
            <input
              type="email"
              placeholder="E-mail address"
              class="form-control"
              value={email}
              name='email'
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
              class="btn btn-primary">Update User</button>
        </div>
      </form>
    </div>
  </div>
   );
}

export default Update;