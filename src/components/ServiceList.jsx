import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (id, name, price) => {
    dispatch(editService(id, name, price));
  }

  return (
    <ul className='list-group col-6 mt-5'>
      {items.map(o => <li key={o.id} className={o.show ? 'list-group-item border-0' : 'list-group-item border-0 hidden'}>
        {o.name} {o.price}
        <button className='float-right btn py-0' onClick={() => handleEdit(o.id, o.name, o.price)}>✎</button>
        <button className='float-right btn py-0' onClick={() => handleRemove(o.id)}>✕</button>
      </li>)}
    </ul>
  )
}

export default ServiceList