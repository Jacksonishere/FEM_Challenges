import { combineReducers } from "redux";
import modalOverlayReducer from "./modalOverlay/modalOverlayReducer";
import modalReducer from "./modal/modalReducer";

const rootReducer = combineReducers({
    overlay: modalOverlayReducer,
    modal: modalReducer,
})

export default rootReducer;