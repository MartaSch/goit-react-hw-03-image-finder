import { Component } from 'react';
import ImagesList from './ImagesList';
import fetchImagesWithQuery from 'services/api';
import { nanoid } from 'nanoid';
import Searchbar from './Searchbar';
import ModalImage from './ModalImage';


class App extends Component {
  state = {
    page: 1,
    q: '',
    items: [],
    isLoading: false,
    error: null,
    largeImageUrl: '',
    showModal: false,
}

getLargeImgUrl = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModal();
}

toggleModal = () => {
    this.setState(state => ({
        showModal: !state.showModal,
    }))
}

handleSubmit = (ev) => {
    ev.preventDefault();
    this.getImages(this.state.query)
    this.resetState();
};

resetState = () => {
    this.setState({
        q: '',
        page: 1,
        items: [],
    })
}

handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value })
}

getImages = async (q, page) => {
    try {
        this.setState({
            isLoading: true,
        });
        const images = await fetchImagesWithQuery(q, page);
        this.setState(prevState => ({
            items: [...prevState.items, ...images],
            isLoading: false,
        }))
    } catch (error) {
        this.setState({ error});
    } finally {
        this.setState({ isLoading: false });
    }
};

componentDidUpdate(_, prevState) {
    if(prevState.page !== this.state.page || prevState.q !== this.state.q) {
        this.getImages(this.state.q, this.state.page);
    }
}

    render() {
        const inputId = nanoid();
        const { items, q, showModal, largeImageUrl } = this.state;
        return (
            <div>
   
    <Searchbar
    q={q}
    inputId={inputId}
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange} />
    {showModal && (
     <ModalImage imgUrl={largeImageUrl} onClose={this.toggleModal}/>
     )}
     <ImagesList items={items} onClick={this.getLargeImgUrl} />
     
  </div>
        );
    };
};
export default App;