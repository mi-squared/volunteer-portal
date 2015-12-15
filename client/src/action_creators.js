import fetchClient from "./fetchClient";
import { getApplication } from "./client";

export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}
export function reset() {
    return {
        type: 'RESET'
    };
}

export function updateField( fieldSpec ) {
    return {
        type: 'UPDATE_FIELD',
        fieldSpec
    };
}

export function addChild( childSpec ) {
    return {
        type: 'ADD_CHILD',
        childSpec
    };
}

export function updateChild( childSpec ) {
    return {
        type: 'UPDATE_CHILD',
        childSpec
    };
}

export function addUpload( upload ) {
    return {
        type: 'ADD_UPLOAD',
        upload
    };
}

export function login( accountSpec ) {
    return {
        type: 'LOGIN',
        accountSpec
    };
}

export function loadApplication( applicationSpec ) {
    return {
        type: 'LOAD_APPLICATION',
        applicationSpec
    };
}

export function receiveOptions(json) {
  return {
    type: 'RECEIVE_OPTIONS',
    json
  }
}

export function receiveDocumentsList(json) {
  return {
    type: 'RECEIVE_DOCUMENTS_LIST',
    json
  }
}

export function isLoggedIn(token, applicationID, stateInfo) {
  return (dispatch, getState) => {
    if (!getState().get('jwt') && token && applicationID) {
      return getApplication(token, applicationID).then(
        (response) => {
          dispatch(loadApplication(response));
          dispatch(login(stateInfo));
        }
      )
    }
  }
}

// export function bootstrap() {
//   return (dispatch, getState) => {
//
//   }
// }

export function fetchOptions() {
    return (dispatch, getState) => {
      if (!getState().get('formLists')) {
        return fetchClient.getOptions()
          .then(response => response.json())
          .then(json =>
            dispatch(receiveOptions(json))
          )
      }
    }
}

export function fetchDocumentsList() {
    return (dispatch, getState) => {
      let noDocumentsLoaded = !getState().get('documentsList');
      let eSigned = getState().toJSON()['data']["q_esigned"] === 'true';
      if (noDocumentsLoaded && eSigned) {
        return fetchClient.getDocumentsJson()
          .then(response => response.json())
          .then(json =>
            dispatch(receiveDocumentsList(json))
          )
      }
    }
}
