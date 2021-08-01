import {listConstants}  from '../constants';

export function getUsers(){
    return (dispatch) => {
        dispatch( {
            type: listConstants.GET_USERS,
        });
    };
}
