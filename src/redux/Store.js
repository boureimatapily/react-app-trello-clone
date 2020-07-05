// import firebase from "../Config/fbconfig";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
// import { reduxFirestore, getFirestore} from 'redux-firestore'

import { getFirebase } from 'react-redux-firebase';


// const initialState = {}

//  let middleware = [applyMiddleware(thunk)];
//  const initialState = {};

// let reduxstore  = createStore(
//   rootReducer,
//    compose(
//   ...middleware,
//   reduxFirestore(firebase),
//   reduxReactFirebase(firebase)
//    )

//   );
//   export default reduxstore


  const store  = createStore(
    rootReducer,
     compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase})), // to add other middleware
      )

    );

export default store

  