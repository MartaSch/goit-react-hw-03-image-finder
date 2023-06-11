import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = '34844586-16ef58ffda20b308d0a01d63e';
    
    const fetchImagesWithQuery = async (searchQuery, page) => {
    const response = await axios.get(`?q=${searchQuery}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data.hits
}
export default fetchImagesWithQuery;