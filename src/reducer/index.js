import {combineReducers} from "redux";
import userAuthorizationReducer from '../reducer/userAuthorizationReducer'

// export function rootReducer(state, action) {
//     return {
//         user: userReducer(state.user, action),
//         stats: statsReducer(state.stats,action)
//     };
// }

export const rootReducer = combineReducers({user: userAuthorizationReducer});