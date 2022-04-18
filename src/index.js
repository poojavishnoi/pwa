import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom' 
import { makeServer } from "./server";
import {FilterContextProvider} from './context/filter-context'
import {CartContextProvider} from './context/cart-context'
import {WishListContextProvider} from './context/wishlist-context'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <FilterContextProvider>
     <CartContextProvider>
     <WishListContextProvider>
        <App />
      </WishListContextProvider>
      </CartContextProvider>
    </FilterContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA


serviceWorkerRegistration.register()
