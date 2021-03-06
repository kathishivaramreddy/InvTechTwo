import React from 'react';
import './ProductList.css'
export class ProductList extends React.Component{
    render(){

        const products = this.props.products.map( product =>
            <div key={product.id} className="product">
                {product.title}<br/>
                <img src={`${product.thumbnail}`} alt={product.title} /><br/>
                Price :- {product.price}
            </div>
        )
        return(
            <div className="productlist">
                {products}
            </div>
        )
    }
}