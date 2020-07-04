import {CHANGE_DISPLAY} from "../actions/SmallMediaDropMenuAction";


function displayChangeReducer(displayChange = {}, action) {
    switch (action.type) {
        case CHANGE_DISPLAY:
            return {...displayChange, display: action.payload};
        default:
            return displayChange;
    }
}

export default displayChangeReducer;