import axios from "axios"

const url="http://localhost:3000"

let jwtToken = null;

const persistedData = localStorage.getItem("persist:rajeenasProject");
if (persistedData) {
    try {
        const parsedData = JSON.parse(persistedData);
        if (parsedData?.loginDatas) {
            const loginData = JSON.parse(parsedData.loginDatas);
            jwtToken = loginData?.loginInfo || null;
        }
    } catch (error) {
        console.error("Error parsing JWT token:", error);
    }
}

console.log("JWT Token:", jwtToken);
const token=jwtToken?.token

console.log("finaly token get it in localstorage",jwtToken.token);


export const publicRequest=axios.create({
    baseURL:url
})

export const tokenRequest=axios.create({
    baseURL:url,
    headers:{accesstoken:token}
})