import { combineReducers } from "redux";
import modalOverlayReducer from "./modalOverlay/modalOverlayReducer";
import modalReducer from "./modal/modalReducer";
import updatePledgeReducer from "./pledges/pledgeReducer";
import progressReducer from "./progress/progressReducer";
import pledgedReducer from "./pledged/pledgedReducer";

const rootReducer = combineReducers({
	overlay: modalOverlayReducer,
	modal: modalReducer,
	updatePledge: updatePledgeReducer,
	progress: progressReducer,
	pledged: pledgedReducer,
});

export default rootReducer;
