import React from 'react'
import product_card from '../data/products_data'

const Main = ()=> {
    console.log(product_card);
    const shoot = () => {
        alert(" product Add Successfully to Your CART");
      }
        const listItems = product_card.map((Item)=>
        <div className='card' key="Item.id">
            <div className='card_img'>
                <img src={Item.thumb}/>
            </div>
            <div className='card_header'>
                <h2>{Item.product_name} </h2>  
                <p>{Item.description}</p>  
                <p className='price'>{Item.price}<span>{Item.currency}</span></p>
                <div className='btn' onClick={shoot}>Add to cart</div>
            </div>
            
        </div>
        );
    return (
        <div className='main'>
            
            {listItems}
        </div>
    )
}

export default Main
