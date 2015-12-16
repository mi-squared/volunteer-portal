import {Router, Route, IndexRoute} from 'react-router';
import React from 'react';
//components
import App from './components/app.jsx';
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

export const openRoutes = <Route path="/" component={App}>
  <IndexRoute component={WelcomePage} />
  <Route path="/new-volunteer" component={NewVolunteerPageContainer} />
  <Route path="/returning-volunteer" component={ReturningVolunteerPageContainer} />
  <Route path="/forgot-password" component={ForgotPasswordPageContainer} />
  <Route path="/external-login" component={ExternalLoginPageContainer} />
</Route>;

export const protectedRoutes = <Route  path="/" component={App}>
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

export function isProtected(location) {
  return protectedRouteArray.indexOf(location.pathname) >= 0;
}

export function isOpen(location) {
  return openRouteArray.indexOf(location.pathname) >= 0;
}
