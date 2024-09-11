import axios from "axios";

let storedToken = localStorage.getItem("reachinbox-auth");
const parsedToken = storedToken ? JSON.parse(storedToken) : ""; 

export const fetchMailList = (authToken: string) => {
    return axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
    .then((response) => response.data.data)
    .catch((error) => console.error("Error fetching mail list:", error));
};

export const fetchMailMessages = (messageId: number) => {
    return axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${messageId}`, {
        headers: {
            'Authorization': `Bearer ${parsedToken}`
        }
    })
    .then((response) => response.data.data)
    .catch((error) => console.error("Error fetching mail messages:", error));
};

export const sendMailMessages = (messageId: number, messageData: any) => {
    return axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${messageId}`, messageData, {
        headers: {
            'Authorization': `Bearer ${parsedToken}`
        }
    })
    .then((response) => {
        console.log("Message sent:", response.data);
        return response.data;
    })
    .catch((error) => {
        console.error("Error sending message:", error);
        throw error;
    });
};

export const removeMailResponse = (messageId: number) => {
    return axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${messageId}`, {
        headers: {
            'Authorization': `Bearer ${parsedToken}`
        }
    })
    .then((response) => {
        console.log("Message deleted:", response);
        return response;
    })
    .catch((error) => console.error("Error deleting message:", error));
};

export const resetMailbox = (authToken: string | null) => {
    return axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/reset`, {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
    .then((response) => {
        console.log("Mailbox reset:", response);
        return response;
    })
    .catch((error) => console.error("Error resetting mailbox:", error));
};
