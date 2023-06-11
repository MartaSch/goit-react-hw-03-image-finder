import PropTypes from 'prop-types';

const ImagesListItem = ({ items, onItemClick }) => {
    return items.map((item, index) => {
        return (
        <li key={index} onClick={() => {
            onItemClick(item.largeImageURL);
        }}>
            <img src={item.webformatURL} alt={item.tags}/>
        </li>
        );
    });
}
ImagesListItem.propTypes = {
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func.isRequired,
}

export default ImagesListItem