import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer  } from 'react-redux-firebase';
import listsReducer from "./listsReducer";
// import userReducer from "./userReducer"



export default combineReducers({
      //     user:userReducer,
          firebase:firebaseReducer,
          firestore: firestoreReducer,
          lists: listsReducer
    
    });