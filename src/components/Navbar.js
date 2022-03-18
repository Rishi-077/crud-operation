import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return ( 
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand">Form</a>
              <button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
        </button>
        
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
              <a class="nav-link" href='#home'>Home Page</a>
                </li>
            
                <li class="nav-item">
                  <a class="nav-link" href='#user'>User Details</a>
                </li>
               
            </ul>
           </div>
        </div>
      </nav>

   );
}

export default Navbar;