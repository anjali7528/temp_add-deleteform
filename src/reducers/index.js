import { ADD_LIST, ADD_TO_List } from "../actions";

const initialListState ={
   ItemList: [],
}

export default function items (state=initialListState, action){
    console.log('LIST REDUCER');

    switch(action.type){
        case ADD_LIST:
            return{
                ...state,
                ItemList: action.items
            }
        case ADD_TO_List:
            console.log('run');
            return{
                ...state,
                ItemList: [action.item, ...state.ItemList]
            }    
        default:
            return state;    
    }
}