class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name:'',
      price1:'',
      price2:'',
      price3:''
      // productName: '',
    };
    
    // this.getInfo = this.getInfo.bind(this);
    // this.updateState = this.updateState.bind(this);
  }
  // updateState(data) {
  //   this.setState({
  //     dataItem: data
  //   });
    
  // }
  componentDidMount() {
    var that = this;
    // this.getInfo();
    var path = window.location.href;
    console.log(path);
    var price1Id = path.substring(path.indexOf("=")+1);
    if(price1Id === "") {
      price1Id = 1;
    }
    $.ajax({
      type: "GET",
      url: "/id/?id=" + price1Id,
      success: function(data) {
        console.log(data);
        that.setState({
          id:data.id,
        name:data.name,
        price1:data.sprice,
        price2:data.dprice,
        price3:data.pprice
          
        });
        console.log(that.state)
     
      },
      error: function(_request, _status, error) {
        console.log(error);
      }
    });
  }
    // addToCart(){
    //   var that =this;
    //     $.ajax({
    //       method: "POST",
    //       url: "/addcart",
    //       datatype:'json',
    //       data:{
    //         id_user:
    //         id_flower:._id
    //       },
    //       success: function() {
    //         console.log('success');
    //     },
    //       error : function(){ console.log('error');}
    //      })
    //      this.retreiveData();
    //   }
    


    changeType(e){
      e.target.type="date";
    }
    changeingone(e){
      console.log(this.state.name)
 
      e.target.style="box-shadow: inset 2px 2px #548f35, inset -2px -2px #548f35;"
      $("#descrip").text("Bouquet will be delivered approximately as pictured.");
      $("#h4").text("$"+this.state.price1)
    }
    changeingtwo(){
      $("#descrip").text("Additional flowers will be added to enhance the bouquet.")
      $("#h4").text("$"+this.state.price2)
    }
    changeingthree(){
      $("#h4").text("$"+this.state.price3)
      $("#descrip").text("We will add more blooms and select the highest quality flowers we offer in this style.")
    }
  render () {
    return (
      <div>
  <div className=" up float  order-container col-xs-12 col-sm-6 col-md-6"> 
  <div id="orderForm">
   <h1  class="order-header" name = "name" >{this.state.name}</h1>
    <br/>
    <div class="orderForm-arrangement_size">
   
<div className="text-align paddingBut">
    <h4 class=" orderForm-price modification_price js-price" id="h4">${this.state.price1}</h4>
    <div className=" btn btn-large btn-order-size btn-order-size--standard col-xs-4 col-sm-4 col-md-4 col-lg-4 js-btnOrderSize" class="up-sell-list options-list price-size-box clearfix" >
    <button className = "btn" name = " price1"  id ="standard" onClick={this.changeingone.bind(this)} >Standard </button>
    <button className = "btntwo btn" name = " price2"  id ="deluxe" onClick={this.changeingtwo.bind(this)}>Deluxe   </button>
    <button className="btntwo btn" name = " price3"  id ="premium" onClick={this.changeingthree.bind(this)}>Premium</button>
    </div>
    </div>
    </div>
    </div>

     <div className="devdes">
   
    
      {/* <div style={{padding:15,textAlign:"center",color:"#8E8E8E"}}> */}
      <div className="up-sell" id = "descrip">Bouquet will be delivered approximately as pictured.</div>
      <br></br>
      
      <div className = "up-selll">Add a zip code for delivery details</div>
      
      
    </div> 
   <br></br>
   <br></br>
    <div className ="dates">
   
    <input className="inputs" placeholder="CHOOSE A DELIVERY DATE" type="text" onFocus={this.changeType.bind(this)} />
  
  </div>
  <div className ="dates">
  
  <button className="colorbtn">Order Now</button>
  </div >
  
  
  
  </div>

  <div>
    
  </div>
  </div>


        
    );
  }
}

ReactDOM.render(<App />, document.getElementById('Flowers4002'));