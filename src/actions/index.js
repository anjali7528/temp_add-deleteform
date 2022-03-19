export const ADD_LIST ='ADD_LIST';
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const SET_FORM_VALUES = 'SET_FORM_VALUES';
export const DELETE_FROM_LIST ='DELETE_FROM_LIST'
export const addlist = (items) => {
    return{
        type: ADD_LIST,
        items
    }
} 


export function addtolist(item){
    return {
        type:ADD_TO_LIST,
        item
    }
}

export function setformvalue(item){
    return {
        type:SET_FORM_VALUES,
        item
    }
}

export function deleteItem(item){
    return{
        type: DELETE_FROM_LIST,
        item
    }
}