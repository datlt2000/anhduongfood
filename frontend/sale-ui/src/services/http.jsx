import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN_URL
axios.defaults.baseURL = baseUrl
const api = {
    get: async (url, data = {}, headers = {}) => {
        return await axios.get(url, data)
    },
    post: async (url, data = {}) => {
        return await axios.post(url, data)
    },
    put: async (url, data = {}) => {
        return await axios.put(url, data)
    },
    delete: async (url, data = {}) => {
        return await axios.delete(url, { data: data })
    },
    upload_form: async (url, data = {}) => {
        const formData = new FormData();
        formData.append("image", data);
        return await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}

export default api;