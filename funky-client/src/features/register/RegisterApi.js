import API from "../../components/axiosClient/AxiosClient";


//   API to register a user

export const registerUserApi = async (data) => {
    try {
        const response = API.post('auth/register', data);
        return response.data;
    } catch(err) {
        throw new Error('Error RegisterApi' + err);
    }
}