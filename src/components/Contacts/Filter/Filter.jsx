import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { filterChange } from "../../../redux/contacts/contactsActions";
import { selectFilter } from "../../../redux/contacts/contactsSelectors";

const Filter = ( ) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => dispatch(filterChange(e.target.value));
    
  return (
    <div className="filterStyle">
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        name="filter"
        type="text"
        className="px-4 py-3 rounded-md"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;