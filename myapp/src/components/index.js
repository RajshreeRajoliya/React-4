// index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Initial state
const initialState = {
  data: null,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Action creator with Redux Thunk
const fetchData = () => {
  return (dispatch) => {
    // Simulating an asynchronous operation with a timeout
    setTimeout(() => {
      const data = { message: 'Data fetched successfully!' };
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    }, 2000); // Simulate 2 seconds delay
  };
};

// Create Redux store with Thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Dispatch the fetchData action
store.dispatch(fetchData());

// Log the initial state and updated state after data fetching
console.log('Initial State:', store.getState());

// Subscribe to changes in the store
store.subscribe(() => {
  console.log('Updated State:', store.getState());
});
