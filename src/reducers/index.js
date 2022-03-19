import { ADD_LIST, ADD_TO_LIST,DELETE_FROM_LIST } from "../actions";

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
        
        case DELETE_FROM_LIST:
            console.log('called', action.item.key)
            const fileterdArray = state.ItemList.filter(
                item => item.name !== action.item.name 
            );
            return{
                ...state,
                ItemList: fileterdArray
            };   
            
        default:
            return state;    
    }
}






