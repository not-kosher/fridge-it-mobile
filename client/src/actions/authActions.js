import firebase, { auth, googleProvider } from '../firebase/config.js';
import { AsyncStorage } from 'react-native';

// Google log in and sign up function from firebase docs. Stores relevant info onto the localStorage object.
export const googleLogin = () => {
  return function(dispatch) {
    auth.signInWithPopup(googleProvider) 
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        let name = user.displayName === null ? user.email : user.displayName;
        // Calls on authReducers.js to create the new state.
        dispatch({type: 'USER_LOGIN_FULFILLED', payload: {
          username: name,
          userId: user.uid
        }});
      })
      .catch(function(error) {
        // alert(error.message);
        dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
      });
  };
};

// Email log in function. Stores relevant info onto the localStorage object.
export const emailLogin = (email, pw, cb) => {
  return function(dispatch) {
    firebase.auth().signInWithEmailAndPassword(email, pw)
      .then(result => {
        // Calls on authReducers.js to create the new state.
        dispatch({type: 'USER_LOGIN_FULFILLED', payload: {
          username: result.email,
          userId: result.uid
        }});

        cb(null, {username: result.email, userId: result.uid});
      })
      .catch((error) => {
        // alert(errorMsgs[error.message]);        
        dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
        cb(error.message);
    });
  };
};

// Firebase log out function.  Removes all stored info from localStorage object.
export const logoutUser = () => {
  return function(dispatch) {
    auth.signOut()
      .then(() => {
        return AsyncStorage.multiRemove(['username', 'userId'])
      })
      .then(() => {
        // Calls on authReducers and fridgeReducers to create the new state
        dispatch({type: 'USER_LOGOUT_FULFILLED'});
        dispatch({type: 'CLEAR_FRIDGE'});
      })
      .catch((error) => {
        console.log('Error logging out', error);      
        dispatch({type: 'USER_LOGOUT_REJECTED', payload: error.message});
      });
  };
};

// Email sign up function. Stores relevant info onto the localStorage object.
export const emailSignUp = (email, pw, cb) => {
  return function(dispatch) {    
    firebase.auth().createUserWithEmailAndPassword(email, pw)
      .then(result => {
        // Calls on authReducers.js to create the new state.
        dispatch({type: 'USER_LOGIN_FULFILLED', payload: {
          username: result.email,
          userId: result.uid
        }});

        cb(null, {username: result.email, userId: result.uid});
      })
      .catch(function(error) {
        // alert(error.message);        
        dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
        cb(error.message);
      });
  };
};

export const setUser = (username, userId) => {
  return function(dispatch) {
    dispatch({type: 'USER_LOGIN_FULFILLED', payload: {
      username,
      userId
    }});
  };
};

// Custom error messages.
const errorMsgs = {
"The password is invalid or the user does not have a password.": 'Password and/or email address is incorrect.',
"The email address is badly formatted.": "Invalid email address.",
"There is no user record corresponding to this identifier. The user may have been deleted.": 'Password and/or email address is incorrect or incorrect log in method.',
"The email address is already in use by another account.": "The email address is already registered."
};