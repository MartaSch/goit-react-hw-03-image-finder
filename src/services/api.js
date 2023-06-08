import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
    const API_KEY = '34844586-16ef58ffda20b308d0a01d63e';
    
    const fetchImagesWithQuery = async (searchQuery) => {
    const response = await axios.get(`?key=${API_KEY}&q=${searchQuery}&page=1&per_page=12&image_type=photo&orientation=horizontal`);
    return response.data.hits;
}
export default fetchImagesWithQuery;