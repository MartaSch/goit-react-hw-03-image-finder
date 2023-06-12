import { Component } from 'react';
import css from './App.module.css';
import ImagesList from './ImageList/ImagesList';
import fetchImagesWithQuery from 'services/api';
import { nanoid } from 'nanoid';
import Searchbar from './Searchbar/Searchbar';
import ModalImage from './ModalImage/ModalImage';
import LoadMore from './LoadMoreButton/LoadMoreButton';
import Loader from './Loader/Loader';

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

openLargeImg = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModal();
}

toggleModal = () => {
    this.setState(({ showModal }) => ({showModal: !showModal,
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
        items: [],
    })
}

handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value })
}

componentDidUpdate(_, prevState) {
    if(prevState.page !== this.state.page || prevState.q !== this.state.q) {
        this.getImages(this.state.query, this.state.page);
    }
}

LoadMore = () => {
    this.setState(prevState => ({
        page: prevState.page + 1,
    }));
};

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
        this.setState({
            error: error.message,
        });
    } finally {
        this.setState({ isLoading: false });
    }
};

    render() {
        const inputId = nanoid();
        const { items, q, showModal, largeImageUrl, isLoading } = this.state;
        return (
            <div className={css.Container}>
   
    <Searchbar
    q={q}
    inputId={inputId}
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
    isLoading={isLoading} 
    />
    {showModal && (
     <ModalImage imgUrl={largeImageUrl} onClose={this.toggleModal}/>
     )}
     <ImagesList items={items} onClick={this.openLargeImg} />
     {isLoading && <Loader/>}
    {items.length >0 && (
        <LoadMore LoadMore={this.LoadMore} isLoading={isLoading}/>
    )}
  </div>
        );
    };
};
export default App;