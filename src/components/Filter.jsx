import { useDispatch } from 'react-redux';
import { setNameFilter } from 'redux/filterslice';
function Find() {
  const dispatch = useDispatch();
  //const filter = useSelector(state => state.filter);
  const onFilterChange = e => {
    dispatch(setNameFilter(e.currentTarget.value));
  };
  return (
    <label>
      Find contact by name
      <input name="search" onChange={onFilterChange} />
    </label>
  );
}
export default Find;
