import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ query, inputId, handleSubmit, handleChange, isLoading }) => {

    return (
      <header className={css.Searchbar}>
  <form onSubmit={handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton} disabled={isLoading}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>
    <input
    className={css.SearchFormInput}
      id = {inputId}
      type="text"
      name="query"
      value={query}
      autoFocus
      autoComplete="off"
      placeholder="Search images and photos"
      onChange={handleChange}
    />
  </form>
  </header>
    )
}

Searchbar.propTypes = {
    query: PropTypes.string.isRequired,
    inputId: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default Searchbar;

