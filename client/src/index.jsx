import React from 'react';
import ReactDOM from "react-dom";
import {Router} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {createHashHistory} from "history";
import { fetchOptions, fetchDocumentsList, getSessionState, isLoggedIn } from "./action_creators.js";
import makeStore from "./store";
import { openRoutes, protectedRoutes, isProtected, isOpen } from "./routes";


const store = makeStore();

store.dispatch({
    type: 'RESET'
});


const history = createHashHistory();

history.listen(location => {
  if (isProtected(location)) {
    let {token, applicationID} = sessionStorage;
    store.dispatch(getSessionState(token, applicationID)).then((response) => {
      if (response !== 200) {
        history.pushState(null, '/');
      }
    });
  }
  //fetch issues here
  store.dispatch(fetchOptions()) // add conditional reset based on url params remove from component life cycle

})

store.subscribe(() => {
  store.dispatch(fetchDocumentsList());
  }
);

ReactDOM.render(

  <Provider store={store}>
    <Router>
      {openRoutes}
      {protectedRoutes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
