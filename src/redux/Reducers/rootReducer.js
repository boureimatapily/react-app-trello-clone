import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer  } from 'react-redux-firebase';
// import userReducer from "./userReducer"


export default combineReducers({
      //     user:userReducer,
          firebase:firebaseReducer,
          firestore: firestoreReducer
    
    });