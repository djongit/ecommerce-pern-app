import API from '../../components/axiosClient/AxiosClient';


export const logInApi = async (credentials) => {
    try {
        console.log('this is credentials Api: ', credentials);
        const response = await API.post('auth/login', credentials);
        console.log('this is responseApi: ', response);
        return response.data;
        

    } catch(err) {
        // console.log('this is error Api: ', err);
        throw err.message;
        
    }
}