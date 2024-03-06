import './Item.css'
import React from 'react';
import ItemDate from './ItemDate';
function Item(props){
    const itemName=props.name;

    return(
      <div className='item-det' >
    <p className='Itema'>{itemName}</p>
    <ItemDate></ItemDate>


    </div>
    )
}
export default Item;