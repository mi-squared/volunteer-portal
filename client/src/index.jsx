import React from 'react';
import ReactDOM from "react-dom";
import {Router} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {createHashHistory} from "history";
import { fetchOptions, fetchDocumentsList, getSessionState } from "./action_creators.js";
import makeStore from "./store";
import { openRoutes, protectedRoutes, isProtected, isOpen } from "./routes";
import { isLoggedIn } from "./client";


const store = makeStore();

store.dispatch({
    type: 'RESET'
});


const history = createHashHistory();

history.listen((location) => {
  let {token, applicationID} = sessionStorage;
  store.dispatch(getSessionState(token, applicationID));
  //fetch issues here
  store.dispatch(fetchOptions()) // add conditional reset based on url params remove from component life cycle
})

function allow() {
  return true
}

history.listenBefore((location, allow) => {
  if (isProtected(location)) {
    isLoggedIn(sessionStorage).then((loggedIn) => {
      if (loggedIn) {
        allow();
      }
    })
  } else {
    isLoggedIn(sessionStorage).then((loggedIn) => {
      if (loggedIn) {
        history.pushState(null, '/main').then(allow());
      } else {
        allow();
      }
    })
  }
})

store.subscribe(() => {
  store.dispatch(fetchDocumentsList());
  }
);

ReactDOM.render(

  <Provider store={store}>
    <Router history={history}>
      {openRoutes}
      {protectedRoutes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
