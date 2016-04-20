import * as redux from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts } from './actions';
import { render } from './view';


const createStore = redux.applyMiddleware(thunk)(redux.createStore);
const store = createStore(reducer);

store.dispatch(getAllProducts());

render(store, document.getElementById('redux-app'));
