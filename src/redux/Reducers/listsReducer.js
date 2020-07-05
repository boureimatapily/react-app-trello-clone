const initialState = [
        {
            title: "Last epi",
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
            
        }

];

const listsReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
           return state;
    }
}
export default listsReducer;