import {applyMiddleware, createStore} from "redux";
import reducer from "../reducer/reducer";
import thunk from "redux-thunk";

// const initialState = {
//     user: {}
// };

export const store = createStore(reducer, applyMiddleware(thunk));