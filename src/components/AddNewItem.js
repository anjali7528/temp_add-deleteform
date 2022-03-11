import React from 'react';


function AddNewItem() {
  return (
    <div><h2>AddNewItem</h2>
    <form>
        Item Name: <input type="text" placeholder='Add Item '></input>
        Item Price:<input type="text" placeholder='Add price'></input>
        <button className='btn'> Add Item</button>
    </form>
    </div>
  )
}

export default AddNewItem;