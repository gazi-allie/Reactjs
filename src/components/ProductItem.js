import './ProductItem.css';
import Card from './Card';
import React, {useState} from 'react';
import ItemDate from './ItemDate';

const ProductItem = (props) => {
   
    const [title, setTitle] = useState(props.title);
  function clickHandler() {

   setTitle("mujeeb");
 
    console.log('submit has been clicked');
  }

  return (
    <Card className="product-item">
      <ItemDate date={props.date}> </ItemDate>
      <div className="product-item-desc"></div>
      <h2> {title}</h2>
      <div>
        <button onClick={clickHandler}> Add to Cart</button>
      </div>
    </Card>
  );
};

export default ProductItem;
