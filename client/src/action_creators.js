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