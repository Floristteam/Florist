import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/signInPage.jsx";
import SignUpForm from "./components/signUpPage.jsx";



class Main extends Component {
    

    
    render(){
        return (

            <BrowserRouter>
                {/* <div> */}
                {/* <Switch> */}
                        <Route exact path={"/"} component={LoginForm} />
                            {/* <LoginForm />  */}
                        <Route path={"/SignUpForm"} component={SignUpForm} /> 
                            {/* <SignUpForm />     */}
                        {/* </Switch>  */}
                    {/* </div>      */}
                
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



