import React, { Component } from "react";
import { Link } from "react-router-dom";

 


class Logo extends React.Component {
  constructor(props){
    super(props);
    this.logout=this.logout.bind(this);

  }
//     this.state = {
//       isLoggedIn:User._id ,
//     }
//    }
//    User.logout((error) =>{
//     if (error) {
//       console.log(error.reason);
//     }else{
//       this.setState({isLoggedIn: !this.state.isLoggedIn,});
//       console.log("Logout successful");
//      }
//  });
// }

logout(){
  //var token = JSON.parse(localStorage.getItem('usertoken'));
  //console.log(token)
  $.ajax({
    type: "get",
    url: "/logout",
    data:{
       
    }, 
    datatype: "json",
    success:function(){
        console.log("logout");
        alert("logout");
       //localStorage.setItem('usertoken', res.data.token)

    },
    error: function(request, status, error) {
          console.log("error in logout");
          alert("error in logout")
        }
    });
  }
   
  render() {
    console.log("hiiii");
    return (
      <div className="forms">
        <section id="#header">
          {/* <div className="row header-innerContainer "> */}
          <div className=" clearfix company-logo ">
            <span id="details">
              Park Florist
              <br />
              2015 Macdonald Ave
              <br />
              Richmond, CA 94801
              <br />
            </span>

            <span>
              <img
                id="logoimg"
                src="https://res.cloudinary.com/bloomnation/c_fit,f_auto,h_1000,q_auto,w_1000/v1/vendor/6263/profile/p/a/parkflorist-logo_2.png"
              />
            </span>

            <span id="spannnn">
              <span id="dropdown">
                <button id="dropbtn">My Account </button>
                <div id="dropdown-content">

                <Link to={'/LoginForm'}>
                  <a role="Link" className="anch" >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns='xlink="http://www.w3.org/1999/xlink"'
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
                    </svg>{" "}
                    log in
                  </a>
                  </Link>

                <Link to={'/SignUpForm'}>
                  <a role="Link" className="anch">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns='xlink="http://www.w3.org/1999/xlink"'
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                    </svg>{" "}
                    sign up
                  </a>
                  </Link>
                 <Link to={'/LoginForm'}>
                  <a role="Link" className="anch"  onClick={this.logout}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns='xlink="http://www.w3.org/1999/xlink"'
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M9.75,7.82C8.21,7.82 7,9.03 7,10.57C7,12.46 8.7,14 11.28,16.34L12,17L12.72,16.34C15.3,14 17,12.46 17,10.57C17,9.03 15.79,7.82 14.25,7.82C13.38,7.82 12.55,8.23 12,8.87C11.45,8.23 10.62,7.82 9.75,7.82Z" />
                    </svg>{" "}
                    Log out
                  </a>
                  </Link>
                </div>
              </span>
              <span id="carticon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns='xlink="http://www.w3.org/1999/xlink"'
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
              </span>
            </span>
          </div>
          {/* </div>{" "} */}
        </section>
        <div className="displayUl header-nav col-md-12">
          <div className="navigation ui-menu">
            <ul>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span>SHOP</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">BIRTHDAY</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">SYMPATHY</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">OCASSION</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">CUSTOM ARRANGMENT</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">ABOUT US</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Logo;