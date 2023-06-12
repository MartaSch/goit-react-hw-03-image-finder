import PropTypes from 'prop-types';
import css from './ImageListItem.module.css';

const ImagesListItem = ({ items, onClick }) => {
    return items.map((item, index) => {
        return (
        <li key={index} onClick={() => {
            onClick(item.largeImageURL);
        }} className={css.GalleryItem}>
            <img src={item.webformatURL} alt={item.tags} className={css.GalleryItemImage}/>
        </li>
        );
    });
}
ImagesListItem.propTypes = {
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func.isRequired,
}

export default ImagesListItem