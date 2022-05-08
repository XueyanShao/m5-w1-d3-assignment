import logo from './logo.svg';
import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      products: [
        {
          id:0,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          value: 0
        },
        {
          id: 1,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          value: 0
        },
        {
          id: 2,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          value: 0
        },
        {
          id:3,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          value: 0,
        }
      ],
    };
  }
  
  renderProducts(products) {
    return (
      <div>
        {products.map(product => 
             <ListGroup className="product-list">
               <ListGroupItem key={product.id} className="product px-5">
                 <div className="product-info py-3">
                  <p className="product-desc">{product.desc} </p>
                  <img className="product-img" src={product.image} width="150px"></img>
                 </div>
                  
                  <input type="text" name="text" className="product-qty mx-3" placeholder="0"/>
                    <span className="bg-white border-0">
                       quantity
                    </span>
                 </ListGroupItem> 
             </ListGroup>)
        }
      </div>
    );
  }
  
  render() {
    return (
      <div className="App">
        <div className="title bg-info px-5 py-5">
          <h1>Shop to React</h1>
          <div className="shopcart">
            <FontAwesomeIcon icon={faShoppingCart} size="sm" />
            <span> 0 items</span>
          </div>
          </div>
          {this.renderProducts(this.state.products)}
          
      </div>
    );
  }
}

export default App;
