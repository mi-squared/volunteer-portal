import React from 'react';
require('react-fastclick');
import Router, {Route, DefaultRoute} from 'react-router';
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
const routes = <Route handler={App}>
    <Route path="/new-volunteer" handler={NewVolunteerPageContainer} />
    <Route path="/do-register" handler={DoRegisterPage} />
    <Route path="/returning-volunteer" handler={ReturningVolunteerPageContainer} />
    <Route path="/children-page" handler={ChildrenPageContainer} />
    <Route path="/volunteering-detail" handler={VolunteeringDetailPageContainer} />
    <Route path="/main" handler={MainPageContainer} />
    <Route path="/done-application" handler={DoneApplicationPage} />
    <Route path="/esign" handler={EsignPageContainer} />
    <DefaultRoute handler={WelcomePage} />
</Route>;

store.dispatch({
    type: 'RESET'
});

Router.run(routes, (Root) => {
    React.render(
        <Provider store={store}>
            {() => <Root />}
        </Provider>,
        document.getElementById('app')
    );
});