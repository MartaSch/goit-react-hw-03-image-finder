import { Component } from 'react';
import ImagesList from './ImagesList';
import api from '../services/api'
import { nanoid } from 'nanoid';
import Searchbar from './Searchbar';


class App extends Component {
  state = {
    q: '',
    images: [],
    isLoading: false,
    error: null,
}

handleSubmit = (ev) => {
    ev.preventDefault();
    this.getImages(this.state.q)
};

handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value })
}

getImages = async (q) => {
    this.setState({ isLoading: true });

    try {
        const images = api.fetchImagesWithQuery(q);
        this.setState({ images });
    } catch (error) {
        this.setState({ error});
    } finally {
        this.setState({ isLoading: false });
    }
};

componentDidMount() {
    this.getImages('cat');
}

    render() {
        const inputId = nanoid();
        const { images, q } = this.state;
        return (
            <div>
   
    <Searchbar
    q={q}
    inputId={inputId}
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange} />
     <ImagesList images={images} />
  </div>
        );
    };
};
export default App;