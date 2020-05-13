import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { filterServices } from '../actions/actionCreators';

export default function ServiceAdd() {
	const filter = useSelector(state => state.serviceFilter);
	const dispatch = useDispatch();

	const handleChange = evt => {
    evt.preventDefault();
    const {value} = evt.target;
		dispatch(filterServices(value));
	}

	return (
    <div className='form-inline mt-4'>
      <label htmlFor="filter">Фильтр</label>
      <input className='form-control mr-4 ml-2' name='filter' onChange={handleChange} />
    </div>
	);
}
