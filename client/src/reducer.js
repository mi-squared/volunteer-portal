import {
    reset,
    updateField,
    addChild,
    updateChild,
    login,
    saveApplication,
    loadApplication,
    INITIAL_STATE
} from './core';

import {saveApplicationRemote}  from './client.js';

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'RESET': {
            return reset(state);
        }
        case 'UPDATE_FIELD': {
            return updateField(state, action.fieldSpec);
        }
        case 'ADD_CHILD': {
            return addChild(state, action.childSpec);
        }
        case 'UPDATE_CHILD': {
            return updateChild(state, action.childSpec);
        }
        case 'SET_STATE': {
            return setState(state, action.state);
        }
        case 'LOGIN': {
            return login(state, action.accountSpec);
        }
        case 'LOAD_APPLICATION': {
            return loadApplication(state, action.applicationSpec);
        }
        case 'SAVE_APPLICATION': {
            //
            doSave( state.toJSON());
            return state;
        }
    }
    return state;
}

function setState(state, newState) {
    var merge = state.merge(newState);
    return merge;
}

function doSave(stateJSON) {
    var token = stateJSON['jwt'];
    var application = {};

    for ( var key in stateJSON.data ) {
        if ( ( key.indexOf('q_') == 0
            || key == 'application_id'
            || key == 'user_id'
            )

            && stateJSON.data.hasOwnProperty(key) ) {
            application[key] = stateJSON.data[key];
        }
    }

    application['id'] = application['application_id'];
    delete application['application_id'];
    saveApplicationRemote(token, application).then(
        function(response) {
            console.log("save success", response);
        },

        function(error) {
            console.log("save error", error);
        }
    );
}
