import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
class Flowers4003 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      productInformation: ""
    };
    // this.getInfo();
    // this.getInfo = this.getInfo.bind(this);

    // this.updateState = this.updateState.bind(this);
  }
  componentDidMount() {
    var that = this;

    var path = window.location.href;
    console.log(path);
    var productInformationID = path.substring(path.indexOf("=") + 1);
    // if (productInformationID === "") {
    //   productInformationID = 1;
    // }
    console.log("id======" + productInformationID);
    $.ajax({
      type: "GET",
      url: "/id/?id=" + productInformationID,
      success: function(data) {
        console.log(data);
        that.setState({
          id: data._id,
          productInformation: data.productifo
        });
        console.log(that.state);
      },
      error: function(_request, _status, error) {
        console.log(error);
      }
    });
  }
  render() {
    console.log("inside getInfo M3");
    return (
      <div>
        <div className="productView row">
          <div className="productInfo-item productInfo-description text-align col-xl-12">
            <div className="display">
              <div className="productInfo-storyIcon icon">
                {/* <img src={require("shop.png")} /> */}
                <img src="https://martinezparkflorist.net/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS.gif" />
                <p span>Directly From</p>
                <p>A Local Florist</p>
              </div>
            </div>
            <div className="display">
              <div className="productInfo-storyIcon icon">
                <img src="https://martinezparkflorist.net/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS-handDelivered.gif" />
                <p>Hand Delivered</p>
              </div>
            </div>
            <div className="display">
              <div className="productInfo-storyIcon icon">
                <img src="https://martinezparkflorist.net/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS-arrangement.gif" />
                <p>Designed, Arranged,</p>
                <p>&amp; Ready to be Enjoyed</p>
              </div>
            </div>
          </div>
          <div className="productInfo-item row productInfo-description col-xl-12">
            <h3>Product Information</h3>
            <div className=" product-description--mobile js-description">
              <p>{this.state.productInformation}</p>
            </div>
          </div>
          <div className="sub">
            <div className="item description  col-xl-12">
              <h3>Substitution Policy</h3>
              <div className="product-description--mobile js-description">
                <p>
                  A horn of corn has been born! We all love popcorn. Corn mazes
                  delight and amuse us. We eat corn syrup. Corn is a part of all
                  of our lives. This Thanksgiving, say “thanks” to corn with
                  this beautiful seasonal centerpiece. Cornbread, ears of corn,
                  and a Cornucopia Utopia! That is what Thanksgiving is all
                  about. And turkey, that’s important too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Flowers4003 />, document.getElementById("Flowers4003"));