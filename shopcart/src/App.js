import React,{ Component } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      products: [
        {
          id:0,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          qty: 0,
          ratings: 3.4,
        },
        {
          id: 1,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          qty: 0,
          ratings: 4.5,
        },
        {
          id: 2,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          qty: 0,
          ratings: 3.3
        },
        {
          id:3,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          qty: 0,
          ratings: 3.8
        }
      ]
    };
  }

  handleIncrement = (addValue) => {
    if(addValue.qty<10) {
      const updatedValue = addValue.qty++;
      this.setState({updatedValue});
    }
  }
  handleDecrement = (subValue) => {
    if(subValue.qty<10) {
      const updatedValue = subValue.qty--;
      this.setState({updatedValue});
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navbar 
          totalValue={this.state.products.map(
          (p) => p.qty).reduce(
            (acc,cur,index) =>
          acc+cur, 0 ) }
          prods={this.state.products}
          handleIncrement = {this.handleIncrement}
          handleDecrement = {this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
