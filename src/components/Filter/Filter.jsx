import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { getFilter } from 'redux/selectors';
import { setContactsFilter } from 'redux/filterSlice';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const onChange = (e) => dispatch(setContactsFilter(e.target.value));


    return <div>
        <label className={css.filterLabel}>Find contacts by name</label>
        <input className={css.filterName}
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
        />
    </div>
}
