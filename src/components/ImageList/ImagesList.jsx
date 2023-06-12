import ImagesListItem from '../ImageListItem/ImagesListItem';
import PropTypes from 'prop-types';
import css from './ImagesList.module.css'

const ImagesList = ({ items, onClick }) => {
    return (
        <ul className={css.gallery}>
        <ImagesListItem
        items={items}
        onClick={onClick}
                />
        </ul>
    )
}

ImagesList.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default ImagesList;
                