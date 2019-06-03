import api from "./api";
import { GET_ALL_MEMBERS } from "./constants";

// Reducer action creators 
export const getAllMembers = (memberData) => ({
    type: GET_ALL_MEMBERS,
    members: memberData
});

// Service call
export const fetchAllMembersService = () => dispatch => {
    return api.fetchAllMembersApi().then(res => dispatch(getAllMembers(res.data)))
}

export const deleteMember = (id) => dispatch => {
    return api.deleteMember(id);
}