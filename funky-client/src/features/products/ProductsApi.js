import API from "../../components/axiosClient/AxiosClient";


//   

export const getAllProductsApi = async () => {
    try {
        const response = API.get('products');
        // const response = fetch("http://localhost:4001/api/products")
        console.log(response);
        return response.data;
    } catch(err) {
        throw new Error('Error getAllProductsApi' + err);
    }
};



