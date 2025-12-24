// Import Packages
import axios from "axios";


const apiURL = process.env.NEXT_PUBLIC_base_url;
const appVersion = process.env.NEXT_PUBLIC_version;


// API Client Base (axios) with version
export const apiInstance = axios.create({
    baseURL: `${apiURL}/${appVersion}`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});


