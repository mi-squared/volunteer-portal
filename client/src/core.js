import {Map, List, fromJS} from 'immutable';

var initialStateTemplate = {
    data: {
        children: {},
        q_is_adventist: "false",
        q_dob : "1970-01-01",
        q_date_graduation : "1970-01-01",
        q_volunteered_before : 'false',
        q_address_country: 'USA',
        q_available_entire_time : 'true'
    },
    session: {
    }
};

export const INITIAL_STATE =  fromJS(JSON.parse(JSON.stringify(initialStateTemplate)));

export function reset() {
    var defaultState = JSON.parse(JSON.stringify(initialStateTemplate));
    var childID = new Date().getTime();
    defaultState.data.children[childID]= { childID : childID };
    return fromJS(defaultState);
}

export function updateField(state, fieldSpec ) {
    return state.setIn(
        fieldSpec.key,
        fieldSpec.value
    );
}

export function addChild(state, childSpec ) {
    var toMerge = {};
    toMerge[childSpec.childID] = childSpec;
    return state.mergeIn(['children'], Map( toMerge ));
}

export function updateChild(state, childSpec ) {
    return state.setIn(
        ['data', 'children', childSpec.childID],
        childSpec
    );
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

export function getServiceBaseURL() {
    return 'http://pth.mi-squared.com';
    //return 'http://localhost:7771';
}