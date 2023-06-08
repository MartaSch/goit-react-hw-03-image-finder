import PropTypes from 'prop-types';

const ImagesList =({ images }) => {

        return(
    <ul>
        {images.map(({ id, webformatURL, tags }) =>(
            <li key={id}>
  <img src={webformatURL} alt={tags} />
</li>
        ))}
    </ul>
        );
}

ImagesList.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
        })
    )
}

export default ImagesList;