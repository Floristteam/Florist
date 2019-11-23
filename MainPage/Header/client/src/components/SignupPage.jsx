import React, { Component } from 'react';


const Welcome = ({user, mainPage})=> {
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <a href="javascript:;" onClick={mainPage}>Go To Main Page</a>
    </div>
    // need link to go to the home page
  )
}

class SignUpForm extends Component {
  
 constructor(props){
   super(props)
   console.log("im her")
 }
  handleSignUp(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let email = this.refs.email.value
    let password = this.refs.password.value
    this.props.onSignUp(username, email, password)
  }
  
  render() {
    return (
      
      <div className="form">     
      <form onSubmit={this.handleSignUp.bind(this)}>
        <h3>Create New Account</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <br></br>
        <br></br>

        <input type="text" ref="email" placeholder="enter you email" />
        <br></br>
        <br></br>

        <input type="password" ref="password" placeholder="enter password" />
        <br></br>
        <br></br>
        <p>Your password should be:</p>
        <li>must be at least 6 characters</li>
        <li>should contain at least one upper case letter [A-Z] and one numeric character [0-9]</li>

        <br></br>
        <br></br>

        <input type="submit" value="SignUp" />

        <h3>_____________________</h3>
        <br></br>
        
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
  
  signUp(username, email, password) {
   
    this.setState({
      user: {
        username,
        email,
        password
      }
    })
  }
  
  mainPage() {
    this.setState({user: null})

    // maybe need some changes 
  }
  
  render() {
   
    return (
      <div>
        <h1 id="title">Welcome To Our World</h1>
        { 
          (this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             mainPage={this.mainPage.bind(this)} 
            />
          :
            <SignUpForm 
             onSignUp={this.signUp.bind(this)} 
            />
        }
      </div>
    )
    
  }
  
};

export default SignUpForm;