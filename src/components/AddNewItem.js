import React from 'react';


class AddNewItem extends React.Component(){

  handleChange =(e) => {
    this.setState({
      newitem : e.target.value
    });
  }

  render(){
  return (
    <div><h2>AddNewItem</h2>
    <form>
        Item Name: <input type="text" placeholder='Add Item ' onChange = {this.handleChange}></input>
        Item Price:<input type="text" placeholder='Add price'></input>
        <button className='btn'> Add Item</button>
    </form>
    </div>
  )
}
}

export default AddNewItem;