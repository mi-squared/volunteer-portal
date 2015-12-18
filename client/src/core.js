import {Map, List, fromJS} from 'immutable';
import {URL} from './url';

var initialStateTemplate = {
    data: {
        children: [],
        uploads: [],
        q_is_adventist: "false",
        q_volunteered_before : 'false',
        q_languages: 'English',
        q_address_country: 'USA',
        q_available_entire_time : 'true'
    },
    session: {
    }

};

export const INITIAL_STATE =  fromJS(JSON.parse(JSON.stringify(initialStateTemplate)));

export function reset() {
    var defaultState = JSON.parse(JSON.stringify(initialStateTemplate));
    return fromJS(defaultState);
}

export function updateField(state, fieldSpec ) {
    return state.setIn(
        fieldSpec.key,
        fieldSpec.value
    );
}

export function addChild(state, childSpec ) {
    var toMerge = state.get("data").get("children").toJSON();
    toMerge.push( childSpec );
    var newstate = state.mergeIn(['data', 'children'], fromJS(toMerge));
    return newstate;
}

export function addUpload(state, upload ) {
    var toMerge = state.get('data').get('uploads').toJSON();
    toMerge.push( upload );
    var newstate = state.mergeIn(['data', 'uploads'], fromJS(toMerge));
    return newstate;
}

export function updateChild(state, childSpec ) {
    var newstate = state.updateIn(
        ['data', 'children', childSpec.childID],
        () => {
          return fromJS(childSpec)
        }
    );
    return newstate;
}

export function removeChild(state, childID ) {
    var newstate = state.updateIn(
        ['data', 'children'],
        (childrenArray) => {
          return childrenArray.delete(childID)
        }
    );
    return newstate;
}

export function login( state, accountInfo ) {
    return state.updateIn(
        ['jwt'],
        "",
        function() {
            return accountInfo.token;
        }
    );
}

export function loadApplication( state, applicationSpec ) {
    return state.setIn(
        [ 'data' ],
        fromJS(applicationSpec)
    );
}

export function receiveOptions( state, json ) {
  return state.set(
    'formLists',
    fromJS(json)
  );
};

export function receiveDocumentsList( state, json ) {
  return state.set(
    'documentsList',
    fromJS(json)
  );
};

export function getServiceBaseURL() {
    return URL;
}
