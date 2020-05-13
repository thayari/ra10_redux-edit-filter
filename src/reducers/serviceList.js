import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICES } from '../actions/actionTypes'

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000, show: true },
  { id: nanoid(), name: 'Замена дисплея', price: 25000, show: true },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      let { id, name, price } = action.payload;

      if (!id) {
        return [...state, { id: nanoid(), name, price: Number(price), show: true }];
      }
      return [...state.map(service => {
        if (service.id === id) {
          return { ...service, name: name, price: Number(price) };
        } else return service;
      })];
    }

    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
    }

    case FILTER_SERVICES: {
      const { value } = action.payload;
      console.log(action.payload)
      const filtered = state.map((service) => {
        const serviceName = service.name.toLowerCase();
        const filter = value.toLowerCase();
        if (serviceName.indexOf(filter) !== -1) {
          return { ...service, show: true }
        }
        return { ...service, show: false };
      });
      return filtered;
    }

    default:
      return state;
  }
}