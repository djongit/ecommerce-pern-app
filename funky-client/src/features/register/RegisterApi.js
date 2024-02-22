import API from "../../components/axiosClient/AxiosClient";


//   API to register a user

export const registerUserApi = async (data) => {
    try {
        // console.log(data);
        const response = await API.post('auth/register', data);
        console.log('API response: ', response);
        return response.data;
        // return response;
    } catch(err) {
        // console.error('Error RegisterApi: ', err);
        // const a = err.response.data.state = "rejected";
        // return a;
        return err.response.data;
        
    }
};