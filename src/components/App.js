import React from 'react';
import AddNewItem from './AddNewItem';
import History from './History';

 

class App extends React.Component {
  
  render(){
    
  return (
    <div className="App">
      <h1 className='header'>Adding Item</h1>
      {/* <div className='expenseDetails'><ExpenseDetails /></div> */}
        <div className='history'  ><History
         dispatch={this.props.store.dispatch} 
         getState={this.props.store.getState}
         subscribe={this.props.store.subscribe}
         /></div>
        <div className='addnewitem'><AddNewItem 
        dispatch={this.props.store.dispatch} 
        getState={this.props.store.getState}
        
        /></div>
    </div>
    
  );
}
}

export default App;
