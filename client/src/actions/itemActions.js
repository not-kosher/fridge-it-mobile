import axios from './axiosInstance';

//functions to get items and add items on front end 
//uses reducers as part of promises to change state

export function getItems(fridgeId, callback) {
  return function(dispatch) {
    axios.get('/api/items/' + fridgeId)
      .then(({ data }) => {
        dispatch({type: 'FETCH_ITEMS_FULFILLED', payload: data});
        callback()
      })
      .catch(err => { 
        dispatch({type: 'FETCH_ITEMS_REJECTED', payload: err});
      });
  };
};

export function addItem(item, id, cb) {
  return function(dispatch) {
    axios.post('/api/items/', {
      name: item.name,
      quantity: item.quantity,
      type: item.type,
      user: item.user,
      fridgeId: id
    })
      .then(({ data }) => {
        dispatch({type: 'POST_ITEM_FULFILLED', payload: data});
        dispatch({type: 'NEW_ITEM_POSTED'});
        cb(null, data);
      })
      .catch(err => { 
        dispatch({type: 'POST_ITEM_REJECTED', payload: err});
        cb(err);
      });
  };
};

export function updateItem(item, id) {
  return function(dispatch) {
    axios.patch('api/items/' + id, {
      name: item.name,
      quantity: item.quantity, 
      type: item.type,
      user: item.user,
      fridgeId: item.fridgeId
    }) 
    .then((response) => {
      dispatch({type: 'UPDATE_ITEM_FULFILLED', payload: response.data[1]})
      .catch(() => (console.log('you dun fucked up')))
    })
    .catch(err => {
      console.log('what the what')
      dispatch({type: 'UPDATE_ITEM_REJECTED', payload: err});
    })
  }
}

export function deleteItem(id) {
  console.log(id)
  return function(dispatch) {
    axios.delete('api/items/' + id)
      .then((response) => {
        dispatch({type: 'DELETE_ITEM_FULFILLED', payload: response.data});
        dispatch({type: 'NEW_ITEM_POSTED'});
      })
      .catch(err => {
        dispatch({type: 'DELETE_ITEM_REJECTED', payload: err});
      });
  };
};
