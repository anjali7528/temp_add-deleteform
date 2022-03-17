export const ADD_LIST ='ADD_LIST';
export const ADD_TO_List = 'ADD_TO_LIST';
export const SET_FORM_VALUES = 'SET_FORM_VALUES';
export const addlist = (items) => {
    return{
        type: ADD_LIST,
        items
    }
} 


export function addtolist(item){
    return {
        type:ADD_TO_List,
        item
    }
}

export function setformvalue(item){
    return {
        type:SET_FORM_VALUES,
        item
    }
}