import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <section class="container-fluid con">
  {/* <!--row justify-content-center is used for centering the login form--> */}
    <section class="row justify-content-center">
    {/* <!--Making the form responsive--> */}
      <section class="col-12 col-sm-6 col-md-4">
        <form class="form-container">
        {/* <!--Binding the label and input together--> */}
        <div class="form-group">
          <h4 class="text-center font-weight-bold"> Login </h4>
          <label for="Inputuser1">Username</label>
           <input type="email" class="form-control" id="Inputuser1" aria-describeby="usernameHelp" placeholder="Enter username"/>
        </div>
        {/* <!--Binding the label and input together--> */}
        <div class="form-group">
          <label for="InputPassword1">Password</label>
          <input type="password" class="form-control" id="InputPassword1" placeholder="Password"/>
        </div>
        <button type="Sign in" class="btn btn-primary btn-block">Sign in</button>
        <div class="form-footer">
          <p> Don't have an account? <a href="#">Sign Up</a></p>
        </div>
        </form>
      </section>
    </section>
  </section>
  
  )
}

export default Login