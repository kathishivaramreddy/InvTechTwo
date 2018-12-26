import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from "../actions/fetchProducts";
import {ProductList} from '../components/ProductList'
import './ProductListContainer.css'

export class ProductListContainer extends React.Component {


    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                {this.props.products.isFetching && <div className="loading">
                    <div className="page-loader">
                        <h5>Loading...</h5>
                    </div>
                </div>}

                <div>
                    <ProductList products ={this.props.products.products}/>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    products:state.products
})

export default connect(mapStateToProps,{fetchProducts})(ProductListContainer)