import { nonEmptyArray } from 'check-types';
import React from 'react'
import  Img from './books.jpg'
import  './Cards.css'
import IncDec from './IncDec';

function Cards() {
    return (
        <div className='product' key='id'>
               <div className='article'><article>Dan Brown</article></div>
              <img className="product-image" src={Img} />
              <div className="product-info">
                <p className="product-name">Angels And Demons</p>
                <p className="product-price">5000 AMD</p>
                <IncDec />
                 <div className='buyButton'><button>Գնել</button></div>
                 
              </div>
              
              
        </div>
    )
}

export default Cards;
