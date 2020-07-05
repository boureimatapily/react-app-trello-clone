import { CONSTANTS } from "../Actions";

let listID = 2;
let cardID = 4;
const initialState = [
        {
            title: "Codetrain",
            id: 0,
            cards: [
                {
                    id:0,
                    text:" welcome to my first epi"
                },
                {
                    id:1,
                    text:" welcome to my second epi"
                }
            ],
            
        },
        {
            title: "Cool trello",
            id: 1,
            cards: [
                {
                    id:0,
                    text:"  trop cool to do it"
                },
                {
                    id:1,
                    text:" join me and let see "
                },
                {
                    id:2,
                    text:" i enjoy coding  "
                },
                {
                    id:3,
                    text:" i enjoy coding  "
                }
            ],
            
        }

];

const listsReducer = (state = initialState, action) =>{
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList ={
                title: action.payload,
                cards:[],
                id: listID
            }
            listID +=1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard ={
                text: action.payload.text,
                id: cardID
            }
            cardID +=1;
            console.log("action receive", action);

            const newState = state.map(list =>{
                if(list.id === action.payload.listID){
                    return {
                        ...list,
                        cards:[...list.cards, newCard]
                    }
                }else {
                    return list
                }
            });

            return newState;
        default:
           return state;

    }
}
export default listsReducer;