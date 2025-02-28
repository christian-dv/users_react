
import PropTypes from 'prop-types';

export const UserSearch = ({ search, onSearchChange }) => {
  return (
    <div className="row justify-content-center w-100 mb-3">
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Busca por nombre..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

UserSearch.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
