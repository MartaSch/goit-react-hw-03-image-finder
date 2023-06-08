import PropTypes from 'prop-types';

const Searchbar = ({ q, inputId, handleSubmit, handleChange }) => {

    return (
  <form onSubmit={handleSubmit}>
    <button type="submit" class="button">
      <span>Search</span>
    </button>
    <input
      id = {inputId}
      type="text"
      name="q"
      value={q}
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
    />
  </form>
    )
}

Searchbar.propTypes = {
    q: PropTypes.string.isRequired,
}

export default Searchbar;

