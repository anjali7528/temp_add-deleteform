import React from 'react'

class itmes extends React.Component {
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
             </div>
        </div>
    </div>
    
  )
}
}

export default itmes;