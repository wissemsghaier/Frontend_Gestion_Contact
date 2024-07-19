import { contactConstants } from "../actions/constante";



// reducer.js
const initialState = {
    contacts: [],
    loading: false,
    error: null,
    createdC : {}, 
    message : '' 
};
  
  const contactsReducer = (state = initialState, action) => {
    switch (action.type) {

        // GET all contact 
      case contactConstants.GET_ALL_CONTACT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case contactConstants.GET_ALL_CONTACT_SUCCESS:
        return {
          ...state,
          loading: false,
          contacts: action.payload.contact,
        };
      case contactConstants.GET_ALL_CONTACT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };

        // ADD contact 
        case contactConstants.ADD_CONTACT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        case contactConstants.ADD_CONTACT_SUCCESS:
        return {
          ...state,
          loading: false,
          createdC: action.payload.createdContact,
        };
        case contactConstants.ADD_CONTACT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };

        // DELETE contact 
        case contactConstants.DELETE_CONTACT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        case contactConstants.DELETE_CONTACT_SUCCESS:
        return {
          ...state,
          loading: false,
          message : action.payload.message,
        };
        case contactConstants.DELETE_CONTACT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };



        // EDIT  contact 
        case contactConstants.EDIT_CONTACT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        case contactConstants.EDIT_CONTACT_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload.message
        };
        case contactConstants.EDIT_CONTACT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };






      default:
        return state;
    }
  };
  
  export default contactsReducer;
  