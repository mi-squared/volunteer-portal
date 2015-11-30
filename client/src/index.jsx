import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/app.jsx';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

import {WelcomePage} from './pages/welcome-page.jsx';
import {NewVolunteerPageContainer} from './pages/new-volunteer-page.jsx';
import {DoRegisterPage} from './pages/do-register-page.jsx';
import {MainPageContainer} from './pages/main-page.jsx';
import {ReturningVolunteerPageContainer} from './pages/returning-volunteer-page.jsx';
import {ChildrenPageContainer} from './pages/children-page.jsx';
import {VolunteeringDetailPageContainer} from './pages/volunteering-detail-page.jsx';
import {DoneApplicationPage} from './pages/done-application-page.jsx';
import {EsignPageContainer} from './pages/esign-page.jsx';

const store = createStore(reducer);
const routes = <Route path="/" component={App}>
    <Route path="/new-volunteer" component={NewVolunteerPageContainer} />
    <Route path="/do-register" component={DoRegisterPage} />
    <Route path="/returning-volunteer" component={ReturningVolunteerPageContainer} />
    <Route path="/children-page" component={ChildrenPageContainer} />
    <Route path="/volunteering-detail" component={VolunteeringDetailPageContainer} />
    <Route path="/main" component={MainPageContainer} />
    <Route path="/done-application" component={DoneApplicationPage} />
    <Route path="/esign" component={EsignPageContainer} />
    <IndexRoute component={WelcomePage} />
</Route>;

store.dispatch({
    type: 'RESET'
});

ReactDOM.render(

  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
