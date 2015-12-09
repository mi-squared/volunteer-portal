import {
    reset,
    updateField,
    addChild,
    updateChild,
    login,
    saveApplication,
    loadApplication,
    receiveOptions,
    INITIAL_STATE
} from './core';

import {Map, List, fromJS} from 'immutable';

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
            return updateField( state, {
                key : [ "data" ],
                value: fromJS( action.state )
            });
        }
        case 'LOGIN': {
            return login(state, action.accountSpec);
        }
        case 'LOAD_APPLICATION': {
            return loadApplication(state, action.applicationSpec);
        }
        case 'RECEIVE_OPTIONS': {
          return receiveOptions(state, action.json);
        }
    }
    return state;
}
