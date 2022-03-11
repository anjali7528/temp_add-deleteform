import React from 'react'
import Itmes from './Itmes';
import{addlist} from '../actions';
import {data} from '../data';
//import ItemList from '../reducers';

class History extends React.Component {
   componentWillMount(){
    this.props.dispatch(
      addlist(data)
    )
      console.log(this.props.getState());
  }
  render(){

     const {ItemList} = this.props.getState();
    console.log('ItemList:',ItemList);
    //const {ItemList} = items;
  //   const {ItemList} = items;

  const displayItems = ItemList;
  return (
    <div>
        <h2>History</h2>
        <div className='list'>
          {displayItems.map((item,index) =>(
           <Itmes 
           dispatch = {this.props.dispatch}
          item = {item}
          key = {`ItemList'-${index}`}
           />
           ))}
        </div>
        
    </div>
  )
}
}

export default History;