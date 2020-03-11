import { SET_ACTIVE_USER_ID } from "../constants/action-types";

export default function user(state = null, action){
	switch (action.type) {
		case SET_ACTIVE_USER_ID:
			return action.payload;
		default:
			return state;
	}
};