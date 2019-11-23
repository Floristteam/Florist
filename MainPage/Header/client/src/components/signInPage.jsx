import React, { Component } from 'react';
import SignUpForm  from './signUpPage.jsx';
import { Link } from "react-router-dom";

const Welcome = ({user, onSignOut})=> {
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
  }
  handleSignIn(e) {
    e.preventDefault()
    let email = this.refs.email.value
    let password = this.refs.password.value
    //this.props.onSignUp(username, email, password)
    $.ajax({
      type: "POST",
      url: "/login",
      data:{
          email: email,
          password:password
         
      }, 
      datatype: "json",
      success:function(){
          console.log("sucess login the user");
          localStorage.setItem('usertoken', res.data.token)
      },
      error: function(request, status, error) {
            console.log("error post");
          }
      });
    }

  render() {
    return (
          
      <div className="form">
    
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="email" placeholder="enter you email" />
        <br></br>
        <br></br>
        <br></br>

        <input type="password" ref="password" placeholder="enter password" />
        <br></br>
        <br></br>
        <br></br>
        <input type="submit" />

        <br></br>
        <br></br>
        <br></br>
        <h3>_____________________</h3>

        <h3>Don't have an Account?!</h3>
        <br></br>
        <div>
         <Link to={'/SignUpForm'}>
           <button role="Link">Sign Up</button>
         </Link>
            {/* <button >
            <a href="/SignUpForm">SignUp</a>
          </button> */}
       
       </div>
       </form>
       </div>
             

    )
  }

}

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
  
  signIn(username, password) {
   
    this.setState({
      user: {
        username,
        password
      }
    })
  }

  signOut() {
    this.setState({user: null})
  }
  
  render() {
   
    return (
      <div>
        <h1 id="title">Nice to see u again!</h1>
        { 
          (this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    )
  }
  
};

export default LoginForm;
