import { apiInstance } from "@/lib/axios.instance";



// Helper function to retrieve token from localStorage or sessionStorage
const getToken = () => {
    return localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
};

// User Authentication APIs ------------------------------ start here
export const registerAPI = (formPayload) => {
    return apiInstance.post('/user/register', formPayload);
}

export const loginAPI = (formPayload) => {
    return apiInstance.post('/user/login', formPayload);
}

export const forgotPasswordAPI = (data) => {
    if (data) {
        return apiInstance.post('/user/forgot/password/send/otp', { credentials: data });
    }
}

export const verifyOtpAPI = (formPayload) => {
    return apiInstance.post('/user/forgot/password/verify', {otp: formPayload.otp, token: formPayload.token} );
}

export const resetPasswordAPI = (formPayload) => {
    return apiInstance.post('/user/forgot/password/reset', { password: formPayload.password, password_confirmation: formPayload.password_confirmation, token: formPayload.token } );
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


// User Authentication APIs ------------------------------ end here

export const dashboardDataAPI = () => {
    const jwrToken = getToken();
    if (jwrToken) {
        
        return apiInstance.get('/user/dashboard',{
            headers:{Authorization: `Bearer ${jwrToken}`}
        });
    } else {
        throw new Error('No token found. Please log in.');
    }
}

export const transactionHistoryAPI = () => {
    const jwrToken = getToken();
    if (jwrToken) {
        
        return apiInstance.get('/user/transactions',{
            headers:{Authorization: `Bearer ${jwrToken}`}
        });
    } else {
        throw new Error('No token found. Please log in.');
    }
}


// all payment apis ------------------------------ start here
export const getPaymentMethodsAPI = () => {
    const jwrToken = getToken();
    if (jwrToken) {
        
        return apiInstance.get('/user/payment-links',{
            headers:{Authorization: `Bearer ${jwrToken}`}
        });
    } else {
        throw new Error('No token found. Please log in.');
    } };
// all payment apis ------------------------------ end here