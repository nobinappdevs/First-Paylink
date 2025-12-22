import { apiInstance } from "@/lib/axios.instance";



// Helper function to retrieve token from localStorage or sessionStorage
const getToken = () => {
    return localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
};


export const registerAPI = (formPayload) => {
    return apiInstance.post('/user/register', formPayload);
}

export const loginAPI = (formPayload) => {
    return apiInstance.post('/user/login', formPayload);
}

export const logOutAPI = () => {
     const jwtToken = getToken();
     if (jwtToken) {
        return apiInstance.get('/user/logout', {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        });
     } else {
        throw new Error('No token found. Please log in.');
    }
}

export const dashboardDataAPI = () => {
    return apiInstance.get('/user/dashboard');
}