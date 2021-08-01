import immutable from 'immutable';
import { listConstants } from '../constants';


const defaultMapState = immutable.fromJS({
    data: [],
    isFetching: false
});

export default function users(state = defaultMapState, { type: actionType, ...data }) {
    switch (actionType) {
        case listConstants.GET_USERS_START:
            return state.set('isFetching', true)
                .set('data', immutable.fromJS([]))
        case listConstants.GET_USERS_SUCCESS:
            return state.set('data', immutable.fromJS(data.data)).set('isFetching', false);
        case listConstants.GET_USERS_FAILURE:
            return state.set('isFetching', false);
        default:
            return state;
    }
}