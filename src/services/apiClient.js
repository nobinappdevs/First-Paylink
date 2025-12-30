import { apiInstance } from "@/lib/axios.instance";

// Helper function to retrieve token from localStorage or sessionStorage
const getToken = () => {
  return localStorage.getItem("jwtToken") || sessionStorage.getItem("jwtToken");
};

// User Authentication APIs ------------------------------ start here
export const registerAPI = (formPayload) => {
  return apiInstance.post("/user/register", formPayload);
};

export const loginAPI = (formPayload) => {
  return apiInstance.post("/user/login", formPayload);
};

export const forgotPasswordAPI = (data) => {
  if (data) {
    return apiInstance.post("/user/forgot/password/send/otp", {
      credentials: data,
    });
  }
};

export const verifyOtpAPI = (formPayload) => {
  return apiInstance.post("/user/forgot/password/verify", {
    otp: formPayload.otp,
    token: formPayload.token,
  });
};

export const resetPasswordAPI = (formPayload) => {
  return apiInstance.post("/user/forgot/password/reset", {
    password: formPayload.password,
    password_confirmation: formPayload.password_confirmation,
    token: formPayload.token,
  });
};

export const logOutAPI = () => {
  const jwtToken = getToken();
  if (jwtToken) {
    return apiInstance.get("/user/logout", {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
};

export const emailverifyAPI = (otp) =>{
  const jwtToken = getToken();
  if (jwtToken) {
    return apiInstance.post('/user/email/otp/verify', {otp:otp},{
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
  } else {
    throw new Error("No token found. Please log in.");
  }
}

export const otpResendAPI = () =>{
    const jwtToken = getToken();
  if (jwtToken) {
    return apiInstance.post('/user/email/resend/code',{},{
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
  } else {
    throw new Error("No token found. Please log in.");
  }
}

export const updatePasswordAPI = (password) =>{
    const jwtToken = getToken();
  if (jwtToken) {
    return apiInstance.post('/user/profile/password/update',password,{
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
  } else {
    throw new Error("No token found. Please log in.");
  }
}

// User Authentication APIs ------------------------------ end here
// user profile apis ------------------------------ start here
export const getUserProfileAPI = () => {
  const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.get("/user/profile", {
      headers: { Authorization: `Bearer ${jwrToken}` },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
};

export const deleteAPI = ()=>{
    const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.post("/user/profile/delete/account", {
      headers: { Authorization: `Bearer ${jwrToken}` },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
}

export const updateProfileAPI = (data) => {
  const jwtToken = getToken();

  if (!jwtToken) {
    throw new Error("No token found. Please log in.");
  }

  return apiInstance.post(
    "/user/profile/update",
    data,                 
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
       "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const getTWOFAAPI = () => {
  const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.get("/user/profile/google-2fa", {
      headers: { Authorization: `Bearer ${jwrToken}` },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
};

export const twoFAStatusUpdateAPI = ({newStatus}) => {
  const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.post("/user/profile/google-2fa/status/update", {status: newStatus}, {
      headers: { Authorization: `Bearer ${jwrToken}` },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
};


export const getKYCVerifyAPI = ()=>{
    const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.get("/user/profile/kyc/input-fields", {
      headers: { Authorization: `Bearer ${jwrToken}` },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
}
export const psotKYCVerifyAPI = (formData)=>{
  console.log(formData.back);
    const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.post("/user/profile/kyc/submit",formData, {
      headers: { Authorization: `Bearer ${jwrToken}` },
      "Content-Type": "multipart/form-data",
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
}

export const kycInfoSubmitAPI = (formPayload) => {
    const token = getToken();
    if (token) {
        return apiInstance.post("/vendor/kyc-submit", formPayload, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        });
    } else {
        throw new Error('No token found. Please log in.');
    }
};



// user profile apis ------------------------------ end here

export const dashboardDataAPI = () => {
  const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.get("/user/dashboard", {
      headers: { Authorization: `Bearer ${jwrToken}` },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
};

export const transactionHistoryAPI = () => {
  const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.get("/user/transactions", {
      headers: { Authorization: `Bearer ${jwrToken}` },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
};

// all payment apis ------------------------------ start here
export const createPaymentAPI = async (formData) => {
  if (!formData) {
    throw new Error("Form data is required.");
  }

  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in.");
  }

  try {
    const response = await apiInstance.post("/user/payment-links/store", formData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || error.message || "API request failed."
    );
  }
};

export const getPaymentMethodsAPI = () => {
  const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.get("/user/payment-links", {
      headers: { Authorization: `Bearer ${jwrToken}` },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
};

export const getPaymentMethodsEditAPI = (id) => {
  const jwrToken = getToken();
  if (jwrToken) {
    return apiInstance.get(`/user/payment-links/edit?target=${id}`, {
      headers: { Authorization: `Bearer ${jwrToken}` },
    });
  } else {
    throw new Error("No token found. Please log in.");
  }
};

export const updatePaymentAPI = async (formData) => {
  if (!formData) {
    throw new Error("Form data is required.");
  }

  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in.");
  }

  try {
    const response = await apiInstance.post("/user/payment-links/update", formData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || error.message || "API request failed."
    );
  }
};


// all payment apis ------------------------------ end here

// all product apis ----------------------------- start here

export const createProduct = async (formData) => {
  if (!formData) {
    throw new Error("Form data is required.");
  }

  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in.");
  }

  try {
    const response = await apiInstance.post("/user/products/store", formData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || error.message || "API request failed."
    );
  }
};

export const getProduct = () => {
  const jwtToken = getToken();
  if (jwtToken) {
    return apiInstance.get("/user/products", {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  } else {
    throw new Error("No Toekn found. please log in.");
  }
};

export const UpdateProductsStatus = (data) => {
  const jwtToken = getToken();
  if (jwtToken) {
    return apiInstance.post(
      "/user/products/status",
      { target: data },
      {
        headers: { Authorization: `Bearer ${jwtToken}` },
      }
    );
  } else {
    throw new Error("No Toekn found. please log in.");
  }
};

export const ProductDelete = async (id) => {
  const jwtToken = getToken();

  if (!jwtToken) {
    throw new Error("No token found. Please log in.");
  }

  if (!id) {
    throw new Error("Product ID is required.");
  }

  try {
    const response = await apiInstance.post(
      "/user/products/delete",
      { target: id },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message?.error?.[0] ||
        error?.response?.data?.message ||
        error.message ||
        "API request failed"
    );
  }
};
export const ProductEdit = async (id) => {
  const jwtToken = getToken();

  if (!jwtToken) {
    throw new Error("No token found. Please log in.");
  }

  if (!id) {
    throw new Error("Product ID is required.");
  }

  try {
    const response = await apiInstance.get(`/user/products/edit?target=${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return response;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message?.error?.[0] ||
        error?.response?.data?.message ||
        error.message ||
        "Failed to fetch product data"
    );
  }
};

export const editProduct = async (formData) => {
  if (!formData) {
    throw new Error("Form data is required.");
  }

  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in.");
  }

  try {
    const response = await apiInstance.post("/user/products/update", formData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || error.message || "API request failed."
    );
  }
};

// all product apis ----------------------------- end here

// all product Links api ------------------------ start here

export const createProductLinkList = async (linkData) => {
  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in");
  }
  try {
    const res = await apiInstance.post("/user/product-links/store", linkData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res
  } catch (error) {
    throw new Error("API request failed");
  }
};
export const UpdateProductLinkList = async (linkData) => {
  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in");
  }
  try {
    const res = await apiInstance.post("/user/product-links/update", linkData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
       return res
  } catch (error) {
    throw new Error("API request failed");
  }
};
export const UpdateProductLinkStatus = async (linkData) => {
  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in");
  }
  try {
    const res = await apiInstance.post("/user/product-links/status", linkData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
       return res
  } catch (error) {
    throw new Error("API request failed");
  }
};
export const deleteProductLinkList = async (linkData) => {
  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in");
  }
  try {
    const res = await apiInstance.post("/user/product-links/delete", linkData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
       return res
  } catch (error) {
    throw new Error("API request failed");
  }
};

export const getProductLinkList = async (id) => {
  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in");
  }
  try {
    const res = await apiInstance.get(`/user/product-links?product_id=${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    throw new Error("API request failed");
  }
};

export const getProductLinkEditList = async (id) => {
  const jwtToken = getToken();
  if (!jwtToken) {
    throw new Error("No token found. Please log in");
  }
  try {
    const res = await apiInstance.get(`/user/product-links/edit?target=${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    throw new Error("API request failed");
  }
};

// all product Links api ------------------------ end here
