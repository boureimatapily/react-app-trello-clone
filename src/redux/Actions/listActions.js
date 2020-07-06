import { CONSTANTS } from "../Actions";
// import uuid from "uuidv4";

export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    }
//   return (dispatch, getState) => {
//     const boardID = getState().activeBoard;
//     const id = uuid();
//     dispatch({
//       type: CONSTANTS.ADD_LIST,
//       payload: { title, boardID, id }
//     });
//   };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
      type: CONSTANTS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        // boardID
      }
  
  };
};

// export const editTitle = (listID, newTitle) => {
//   return {
//     type: CONSTANTS.EDIT_LIST_TITLE,
//     payload: {
//       listID,
//       newTitle
//     }
//   };
// };

// export const deleteList = listID => {
//   return (dispatch, getState) => {
//     const boardID = getState().activeBoard;
//     return dispatch({
//       type: CONSTANTS.DELETE_LIST,
//       payload: {
//         listID,
//         boardID
//       }
//     });
//   };
// };
