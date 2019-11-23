import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/signInPage.jsx";
import SignUpForm from "./components/signUpPage.jsx";
import Logo from "./components/logo.jsx";




class Main extends Component {
    

    
    render(){
        return (

            <BrowserRouter>
                        <Logo />
                        <br/>
                        <Route exact path={"/LoginForm"} component={LoginForm} />
                        <Route path={"/SignUpForm"} component={SignUpForm} /> 
                        <br/>
            </BrowserRouter>
            
        )
    }
};

// class App extends React.Component {
  
//     constructor(props) {
//       super(props)
//       this.state = {
//         user: null
//       }
//     }
    
//     signIn(username, password) {
     
//       this.setState({
//         user: {
//           username,
//           password
//         }
//       })
//     }
  
//     signOut() {
//       this.setState({user: null})
//     }
    
//     render() {
     
//       return (
//         <div>
//           <h1 id="title">Nice to see u again!</h1>
//           { 
//             (this.state.user) ? 
//               <Welcome 
//                user={this.state.user} 
//                onSignOut={this.signOut.bind(this)} 
//               />
//             :
//               <LoginForm 
//                onSignIn={this.signIn.bind(this)} 
//               />
//           }
//         </div>
//       )
      
//     }
    
//   };

ReactDOM.render(<Main></Main>,document.getElementById("app"));



