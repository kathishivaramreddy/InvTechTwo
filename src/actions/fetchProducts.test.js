import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {FETCH_PRODUCTS} from "./types";
import {fetchProducts} from "./fetchProducts";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('products data action', () => {

    it('should dispatch fetch on action for product data ',() => {
        const store = mockStore({products:[]})

        fetchMock.getOnce('https://api.mercadolibre.com/sites/MLB/search?category=MLB1743&limit=20',{
            body:{results:[{title:'product1',price:2000}]},
            headers:{'content-type':'application/json'}
        })

        const expectedAction = [{
            type:FETCH_PRODUCTS,
            payload:[{title:'product1',price:2000}]
        }]

        store.dispatch(fetchProducts()).then( () => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})