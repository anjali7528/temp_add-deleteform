import React from 'react'
import Itmes from './Itmes';
import{addlist} from '../actions';
import {data} from '../data';



class History extends React.Component {
   componentDidMount(){
     this.props.subscribe(()=>{
       console.log('UPDATED');
       this.forceUpdate();
     })
   
    this.props.dispatch(
      addlist(data)
    )
      console.log(this.props.getState());
  }
  render(){
 
     const {ItemList} = this.props.getState();
    console.log('hItemList:',ItemList);
    
  

  const displayItems = ItemList;
  return (
    <div>
        <h2>Items</h2>
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