import { ADD_LIST } from "../actions";

const initialListState ={
   ItemList: []
}

export default function items (state=initialListState, action){
    console.log('LIST REDUCER');

    switch(action.type){
        case ADD_LIST:
            return{
                ...state,
                ItemList: action.items
            }
        default:
            return state;    
    }
}