//class
import React from "react";
import CardItem from "./CardItem.jsx";
class CardList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    // console.log('from cardlist render', this.props);
    // var cards = [];
    // if(this.props.cards.length !== 0) {
    //     cards = this.props.cards;
    // }

    // console.log('from cardlist render**',this.props.cards);
    return (
        <div className="main-container">
          {this.props.cards.map(card => {
            return <CardItem card={card} />;
          })}
        </div>
    );
  }
}

export default CardList;
