import ImagesListItem from './ImagesListItem';
import PropTypes from 'prop-types';

const ImagesList = ({ items, onClick }) => {
    return (
        <ul>
        <ImagesListItem
        items={items}
        onItemClick={onClick}
                />
        </ul>
    )
}

ImagesList.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default ImagesList;
                