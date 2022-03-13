import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  return ( 
    <div className='container'>
      <div className='py-4'>
        <h1>Enter Details</h1>
        <hr />
        <br/>

        <form class="row g-3">

        <div class="col-md-6">
            <label for="Name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              aria-label="Name" />
        </div>
        <div class="col-md-6">
          <label for="validationTooltipUsername" class="form-label">Username</label>
          <div class="input-group has-validation">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              <input
                type="text"
                class="form-control" id="validationTooltipUsername" />
        <div class="invalid-tooltip">
        Please choose a unique and valid username.
        </div>
    </div>
        </div>
        
          
       <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="Phone no" class="form-label">Phone no</label>
          <input type="Phon no" class="form-control" id="Number"/>
          </div>
          

          <div class="col-md-6">
            <label for="Website" class="form-label">Website</label>
            <input
              type="Website"
              class="form-control"
              aria-label="Name" />
        </div>
        
        <div class="col-12">
            <button
              type="submit"
              class="btn btn-primary">submit</button>
        </div>
      </form>
    </div>
  </div>
   );
}

export default Form;