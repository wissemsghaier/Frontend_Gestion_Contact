import axios from 'axios';
import { contactConstants } from './constante';




export const listerContact = () => {
  return async (dispatch) => {
    dispatch({ type: contactConstants.GET_ALL_CONTACT_REQUEST });
    try {
      const res = await axios.get('http://127.0.0.1:3001/contact/lister');
      if (res.status === 200) {
        dispatch({
          type: contactConstants.GET_ALL_CONTACT_SUCCESS,
          payload: { contact: res.data },
        });
      }
    } catch (error) {
      console.error('Error fetching contacts:', error); // Add this line for logging
      dispatch({
        type: contactConstants.GET_ALL_CONTACT_FAILURE,
        payload: { error: error.response ? error.response.data : 'Network Error' },
      });
    }
  };
};



export const addContactAction = (data) => {
    return async (dispatch) => {
        dispatch({ type: contactConstants.ADD_CONTACT_REQUEST });
        try {
          const res = await axios.post('http://127.0.0.1:3001/contact/ajouter',data);
          if (res.status === 200) {
            dispatch({
              type: contactConstants.ADD_CONTACT_SUCCESS,
              payload: { createdContact: res.data },
            });
          }
        } catch (error) {
          console.error('Error fetching contacts:', error); // Add this line for logging
          dispatch({
            type: contactConstants.ADD_CONTACT_FAILURE,
            payload: { error: error.response ? error.response.data : 'Network Error' },
          });
        }
      };
}



export const deleteContactAction = (id) => {
    return async (dispatch) => {

      dispatch({ type: contactConstants.DELETE_CONTACT_REQUEST });
      try {
        const res = await axios.get(`http://127.0.0.1:3001/contact/${id}/supprimer`);
        if (res.status === 200) {
          dispatch({
            type: contactConstants.DELETE_CONTACT_SUCCESS,
            payload: { message: res.data.message },
          });
        }
      } catch (error) {
        console.error('Error deleting contact:', error); // Add this line for logging
        dispatch({
          type: contactConstants.DELETE_CONTACT_FAILURE,
          payload: { error: error.response ? error.response.data : 'Network Error' },
        });
      }
    };
  };




  export const editContactAction = (id, data) => {
    return async (dispatch) => {
        dispatch({ type: contactConstants.EDIT_CONTACT_REQUEST });
        try {
          const res = await axios.post(`http://127.0.0.1:3001/contact/${id}/modifier`, data);
          if (res.status === 200) {
            dispatch({
              type: contactConstants.EDIT_CONTACT_SUCCESS,
              payload: { message: res.data },
            });
          }
        } catch (error) {
          console.error('Error edit  contacts:', error); // Add this line for logging
          dispatch({
            type: contactConstants.EDIT_CONTACT_FAILURE,
            payload: { error: error.response ? error.response.data : 'Network Error' },
          });
        }
      };
}