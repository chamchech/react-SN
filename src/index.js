import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";



    render(
        <BrowserRouter>
            <Provider store={store}>
            <App/* state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}*//>
            </Provider>
        </BrowserRouter>,document.getElementById('root'));

// store.subscribe(rerenderEntireTree);

// suite a une erreur : cannot read property profilePage of undefinded une fonction anonyme est utiliser
/*store.subscribe(() =>{
    let state = store.getState();
    rerenderEntireTree(state);
})*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
