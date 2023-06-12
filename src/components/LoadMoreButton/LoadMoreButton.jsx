import PropTypes from 'prop-types';
import css from './LoadMoreButton.module.css'

const LoadMore = ( { LoadMore }) => {
    return (
        <button type="button" className={css.LoadMoreButton} onClick={LoadMore}>Load more</button>
    )
}

LoadMore.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}

export default LoadMore;