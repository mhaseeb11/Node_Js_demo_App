import { GET_ALL_MEMBERS } from "./constants";

export const initialState = {
    membersList: [],
}

export default function employeeReducer(state = initialState, action) {
    switch (action && action.type) {
        case GET_ALL_MEMBERS: {
            return { ...state, membersList: action.members }
        }
        
        default: return state
    }
}