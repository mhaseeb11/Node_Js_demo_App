import axios from 'axios';
import constants from '../../../config/constants'

const fetchAllMembersApi = () => axios.get(constants.baseApiUrl+"/api/members/fetchAllMembers");

const deleteMember = (id) => axios.delete(constants.baseApiUrl+`/api/members/deleteMember/${id}`);

export default { fetchAllMembersApi, deleteMember };