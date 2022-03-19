import React from 'react'
import { deleteItem } from '../actions';

class itmes extends React.Component {

  handleDeleteItem = () => {
    const {item} = this.props;
    console.log(item);
    this.props.dispatch(deleteItem(item))
  }

  render(){
    const {item} = this.props;
    


  return ( 
    <div>
         <div className='item-card'>
             <div className='left'>
                 <div className='item-name'>{item.name}</div>
             </div>    
             <div className='right'>
                  <div className='price'>{item.Price}</div>
                  <button onClick={this.handleDeleteItem}>delete</button>
             </div>
        </div>
    </div>
    
  )
}
}

export default itmes;