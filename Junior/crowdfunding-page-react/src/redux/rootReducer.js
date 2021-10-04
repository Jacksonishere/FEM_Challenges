import { combineReducers } from "redux";
import modalOverlayReducer from "./modalOverlay/modalOverlayReducer";
import modalReducer from "./modal/modalReducer";
import updatePledgeReducer from "./pledges/pledgeReducer";
import progressReducer from "./progress/progressReducer";

const rootReducer = combineReducers({
	overlay: modalOverlayReducer,
	modal: modalReducer,
	updatePledge: updatePledgeReducer,
	progress: progressReducer,
});

export default rootReducer;
