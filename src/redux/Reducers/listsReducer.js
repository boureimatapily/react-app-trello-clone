import { CONSTANTS } from "../type";

let listID = 2;
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
            id: 0,
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
                }
            ],
            
        }

];

const listsReducer = (state = initialState, action) =>{
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList ={
                title: action.payload.title,
                cards:[],
                id: listID
            }
            listID +=1;
            return [...state, newList];
        default:
           return state;
    }
}
export default listsReducer;