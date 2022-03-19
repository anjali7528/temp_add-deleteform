import actions from "redux-form/lib/actions";
import { ADD_LIST, ADD_TO_LIST } from "../actions";

const initialListState = {
   ItemList: [],
}

export default function items (state = initialListState, action){
    console.log('LIST REDUCER');

    switch(action.type){
        case ADD_LIST:
            return{
                ...state,
                ItemList: action.items
            }
        case ADD_TO_LIST:
            console.log('run', state);
            return{
                ...state,
                ItemList: [...state.ItemList, action.item],
            }    
            
        default:
            return state;    
    }
}






