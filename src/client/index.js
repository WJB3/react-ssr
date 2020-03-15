import React from 'react';
import ReactDom from 'react-dom';
import Home from '../container/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import { createStore ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const reducer = (state = { wjb: "wjb",age:18 }, action) => {
    return state;
}

const store = createStore(reducer,applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {Routes}
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App />, document.getElementById('root'))