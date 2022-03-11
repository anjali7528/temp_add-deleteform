import React, { useState, useEffect } from 'react';
import Itmes from './Itmes';
import{addlist} from '../actions';
import {data} from '../data';
import {useDispatch} from 'react-redux';

function HistoryApp({d,getState}) {

    // componentWillMount(){
    //     this.props.dispatch(
    //       addlist(data)
    //     )
    //       console.log(this.props.getState());
    //   }




 const [state,setState] = useState([])
  const dispatch = useDispatch()


 //  useEffect(() => {
//     dispatch(addlist(data));
//  },[])

 useEffect(() => {
    dispatch(addlist(data))
   setState(getState)
   console.log('STATE:', state);
 }, [])


 
  return (
    <div>HistoryApp</div>
  )

}

export default HistoryApp