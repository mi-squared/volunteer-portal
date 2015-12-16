import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/app.jsx';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {createHashHistory} from "history";
import { fetchOptions, fetchDocumentsList, getSessionState, isLoggedIn } from "./action_creators.js";
import makeStore from "./store";


import {WelcomePage} from './pages/welcome-page.jsx';
import {NewVolunteerPageContainer} from './pages/new-volunteer-page.jsx';
import {DoRegisterPage} from './pages/do-register-page.jsx';
import {MainPageContainer} from './pages/main-page.jsx';
import {ReturningVolunteerPageContainer} from './pages/returning-volunteer-page.jsx';
import {ChildrenPageContainer} from './pages/children-page.jsx';
import {VolunteeringDetailPageContainer} from './pages/volunteering-detail-page.jsx';
import {DoneApplicationPage} from './pages/done-application-page.jsx';
import {EsignPageContainer} from './pages/esign-page.jsx';
import {UploadPageContainer} from './pages/upload-page.jsx';
import {AccountPageContainer} from './pages/account-page.jsx';
import {ForgotPasswordPageContainer} from './pages/forgot-password-page.jsx';
import {ExternalLoginPageContainer} from './pages/external-login-page.jsx';

// const store = createStore(reducer);
const store = makeStore();

const openRoutes = <Route path="/" component={App}>
  <IndexRoute component={WelcomePage} />
  <Route path="/new-volunteer" component={NewVolunteerPageContainer} />
  <Route path="/returning-volunteer" component={ReturningVolunteerPageContainer} />
  <Route path="/forgot-password" component={ForgotPasswordPageContainer} />
  <Route path="/external-login" component={ExternalLoginPageContainer} />
</Route>;

const protectedRoutes = <Route  path="/" component={App}>
    <Route path="/do-register" component={DoRegisterPage} />
    <Route path="/children-page" component={ChildrenPageContainer} />
    <Route path="/volunteering-detail" component={VolunteeringDetailPageContainer} />
    <Route path="/main" component={MainPageContainer} />
    <Route path="/done-application" component={DoneApplicationPage} />
    <Route path="/esign" component={EsignPageContainer} />
    <Route path="/upload-forms" component={UploadPageContainer} />
    <Route path="/account" component={AccountPageContainer} />
  </Route>;

const protectedRouteArray = protectedRoutes.props.children.map(
  (child) => {return child.props.path});

const openRouteArray = openRoutes.props.children.map(
  (child) => {return child.props.path});

store.dispatch({
    type: 'RESET'
});

const history = createHashHistory();
history.listen(location => {

  let isProtected = protectedRouteArray.indexOf(location.pathname) >= 0;
  if (isProtected) {
    console.log('you shouldnt be here');
  }

  let token = sessionStorage.getItem('token');
  let applicationID = sessionStorage.getItem('applicationID');
  store.dispatch(getSessionState(token, applicationID, sessionStorage));
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
