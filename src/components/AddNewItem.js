import React from 'react';


//class AddNewItem extends React.Component(){

function AddNewItem(){
  // constructor(props){
  //   super(props);
  //   this.state={
  //     newitem: ' ',
  //     newprice: 0
  //   }
  // }

  // handleChangeItem =(e) => {
  //   this.setState({
  //     newitem : e.target.value
  //   });
  // }

  // handleChangePrice =(e) => {
  //   this.setState({
  //     newprice : e.target.value
  //   });
  // }

  // render(){
  return (
    <div><h2>AddNewItem</h2>
    <form>
        Item Name: <input type="text" placeholder='Add Item ' /*onChange = {this.handleChangeItem}*/></input>
        Item Price:<input type="text" placeholder='Add price' /*onChange = {this.handleChangePrice}*/></input>
        <button className='btn' onClick={() => this.handleAddNewItem()}> Add Item</button>
    </form>
    </div>
  )
}
//}

export default AddNewItem;