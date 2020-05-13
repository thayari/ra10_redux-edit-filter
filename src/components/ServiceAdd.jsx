import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, cancelEditService } from '../actions/actionCreators';

export default function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const { name, value } = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		dispatch(addService(item.id, item.name, item.price));
	}

	const handleCancel = () => {
		dispatch(cancelEditService());
	}

	return (<form className='form-inline mt-5' onSubmit={handleSubmit}>
			<label className='mr-2' htmlFor="name">Сервис</label>
			<input className='form-control mr-4' name='name' onChange={handleChange} value={item.name} />
			<label className='mr-2' htmlFor="price">Цена</label>
			<input className='form-control mr-4' name='price' onChange={handleChange} value={item.price} />
			<button className='btn btn-primary' type='submit'>Save</button>
			<button className='btn btn-default' type='button' onClick={handleCancel}>Cancel</button>
		</form>);
}