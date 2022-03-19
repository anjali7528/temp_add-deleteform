import React from 'react';
import {addtolist } from '../actions';


class AddNewItem extends React.Component{

// function AddNewItem(){
  constructor(props){
    super(props);
    this.state={
      name: ' ',
      Price: 0
    };
  }

  handleAddNewItem = e => {
    console.log('Item',this.state);
    e.preventDefault();
    this.props.dispatch(addtolist(this.state));
  }

  handleChange1 =(e) => 
    this.setState({
      name: e.target.value
    } 
  );

    handleChange2 = (e) =>
    this.setState({
      Price: e.target.value,
    }
  );  
    
  render(){
    
    
  return (
    <div><h2>AddNewItem</h2>
    <form> 
        Item Name: <input 
        type="text"
        name="item"
         placeholder='Add Item '
         onChange = {this.handleChange1}
         required
         ></input>
        Item Price:<input 
        type="number" 
        name="price"
        placeholder='Add price'
       onChange = {this.handleChange2}
       
         ></input>
        <button className='btn' type="submit" onClick={this.handleAddNewItem}> Add Item</button>
    </form>
    </div>
  )
}
}

export default AddNewItem;