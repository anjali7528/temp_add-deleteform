import React from 'react';
import AddNewItem from './AddNewItem';
import ExpenseDetails from './ExpenseDetails';
//import History from './History';
import HistoryApp from './HistoryApp';


 

class App extends React.Component {
  
  render(){
  return (
    
    <div className="App">
      <h1 className='header'>Expense Tracker</h1>
      <div className='expenseDetails'><ExpenseDetails /></div>
        <div className='history'  ><HistoryApp
         dispatch={this.props.store.dispatch} 
         getState={this.props.store.getState}
         /></div>
        <div className='addnewitem'><AddNewItem /></div>
    </div>
    
  );
}
}

export default App;
