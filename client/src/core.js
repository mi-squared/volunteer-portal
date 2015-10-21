import {Map, List} from 'immutable';

export const INITIAL_STATE =  Map({
    children: {},
    q_is_adventist: "false",
    q_dob : "1970-01-01",
    q_date_graduation : "1970-01-01",
    q_volunteered_before : 'false'
});

var serviceURL = 'http://localhost:7771';

export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}

export function reset() {
    var defaultState = {
        children: {},
        q_is_adventist: "false",
        q_dob: "1970-01-01",
        q_date_graduation : "1970-01-01",
        q_volunteered_before: 'false'
    };
    var childID = new Date().getTime();
    defaultState['children'][childID]= { childID : childID };
    return Map(defaultState);
}

export function updateField(state, fieldSpec ) {
    return state.updateIn(
        [fieldSpec.key],
        "",
        function() {
            return fieldSpec.value;
        }
    );
}

export function addChild(state, childSpec ) {
    var toMerge = {};
    toMerge[childSpec.childID] = childSpec;
    return state.mergeIn(['children'], Map( toMerge ));
}

export function updateChild(state, childSpec ) {
    return state.updateIn(
        ['children', childSpec.childID],
        "",
        function () {
            return childSpec;
        }
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
    var merge = state.merge(applicationSpec);
    return merge;
}

export function getServiceBaseURL() {
    return 'http://pth.mi-squared.com';
    //return 'http://localhost:7771';
}