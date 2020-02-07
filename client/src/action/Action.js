import {
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  LOADING_CONTACT
} from "./ActionType";
import axios from "axios";
export const getContact = () => dispatch => {
  
    dispatch(setContact);
    axios.get("/api/lists").then(res => dispatch({
        type: GET_CONTACT,
        payload:res.data
    }))
};
export const addContact = list => dispatch => {
  axios.post("/api/lists", list).then(res => dispatch(
  
       getContact()
    ));
}
export const deleteContact = id => dispatch => {
  axios.delete(`/api/lists/${id}`).then(res => dispatch(
    getContact()
  ))
}
export const editContact = (id, newContact) => dispatch => {
  axios.put(`/api/lists/${id}`,newContact).then(res => dispatch(
    getContact()))
}
export const setContact = () => ({
    type:LOADING_CONTACT
}
)