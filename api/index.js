const apiKey = `cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`;
const baseApi = `https://api.unsplash.com/`;

export const getPhotosList = async () => {
    try {
        const response = await fetch(`${baseApi}photos/?client_id=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};