import API from '../../components/axiosClient/AxiosClient';


export const logInApi = async (credentials) => {
    try {
        const response = await API.post('auth/login', credentials);
        console.log(response);
        return response;
        
    } catch(err) {
        throw err.response.data;
    }
}