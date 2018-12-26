import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from "../actions/fetchProducts";
import './ProductListContainer.css'

export class ProductListContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.products.isFetching && <div className="loading">
                    <div className="page-loader">
                        <h5>Loading...</h5>
                    </div>
                </div>}

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    products:state.products
})

export default connect(mapStateToProps,{fetchProducts})(ProductListContainer)