import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CardItem from './components/CardItem.jsx';
import CardList from './components/CardList.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
        //methods to bind
        
        this.updateState = this.updateState.bind(this);

    }

    //methods
    updateState(data) {
        this.setState({
            cards: data
             
        })
        console.log('From update',this.state.cards);
    }

    componentDidMount(){
        
        this.retrieveData();
    }

   

    retrieveData() {
        var that = this;
        $.ajax({
            url: "/cards",
            method: "GET",
            success: function(data) {
                that.updateState(data)
            },
            error: function(error) {
                console.log(error)
            }
        })
    }


    render() {
        return(
            <div className="rendered-div">
                {/* <CardItem /> */}
                <CardList cards={this.state.cards}/>                      
            </div>
        )
    }

    
}

ReactDOM.render(<App />, document.getElementById("designs"))


