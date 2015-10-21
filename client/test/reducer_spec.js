import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

    it('handles SET_ENTRIES', () => {
        const initialState = Map();
        const action = {type: 'SET_ENTRIES', entries: ['Trainspotting']};
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            entries: ['Trainspotting']
        }));
    });

    it('handles UPDATE_FIELD', () => {
        const initialState = Map();
        const action = {type: 'UPDATE_FIELD', fieldSpec: { key: 'q-are-you-real', value : 'yes' } };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            'q-are-you-real': 'yes'
        }));
    });

    it('has an initial state', () => {
        const action = {type: 'SET_ENTRIES', entries: ['Trainspotting']};
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            entries: ['Trainspotting']
        }));
    });

    //it('can be used with reduce', () => {
    //    const actions = [
    //        {type: 'SET_ENTRIES', entries: ['Trainspotting', '28 Days Later']}
    //    ];
    //    const finalState = actions.reduce(reducer, Map());
    //
    //    expect(finalState).to.equal(fromJS({
    //        winner: 'Trainspotting'
    //    }));
    //});
});