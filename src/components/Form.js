import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useForm } from 'react-hook-form'



function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   job: ""
  // });


  const onInputChange = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {

    // console.log("data", data);
    // return;

    axios.post('http://localhost:3003/users', data)
      .then((res) => {
        console.log(res);
        // setUser(result);
        if (res.status == 201) {
          window.location.reload()
        }
      })

    reset();
  }

  const onError = (errors) => {
    console.log(errors, alert('Enter all inputs :)'));

  }

  return (
    <div className='container mt-5' id='home'>
      <div className='py-4'>
        <h1>Enter Details</h1>
        <hr />
        <br />

        <form class="row g-4" onSubmit={handleSubmit(onSubmit, onError)}>

          <div class="col-md-6 form-group">
            <label for="Name" class="form-label">Name</label>
            <input
              type="text"
              className='form-control'
              placeholder="Name"
              name="name"
              onChange={e => onInputChange(e)}
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^([a-zA-Z ]){2,30}$/,
                  message: "Value is Invalid",
                }
              })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            {errors.name &&
              (<small className='text-danger'>{errors.name.message} </small>)}
          </div>



          <div class="col-md-6 form-group">
            <label for="inputEmail4" class="form-label">Email</label>
            <input
              type="text"
              placeholder="E-mail address"
              className='form-control'
              name='email'
              onChange={e => onInputChange(e)}
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>



          <div class="col-md-6 form-group">
            <label for="Phone no" class="form-label">Phone no</label>
            <input
              type="text"
              className='form-control'
              placeholder="Phone"
              id="Number"
              name='phone'
              onChange={e => onInputChange(e)}
              {...register("phone", {
                required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
              })}
              onKeyUp={() => {
                trigger("phone");
              }}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
          </div>


          <div class="col-md-6 form-group">
            <label for="job" class="form-label">Job title</label>
            <select
              class="form-select"
              {...register("job", {
                required: 'job is required',
              })}
              name='job'
              onChange={e => onInputChange(e)}
            >
              {/* <option selected>select your job roles</option> */}
              <option selected value="Web Developer">Web Developer</option>
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