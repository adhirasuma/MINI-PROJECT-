import React from 'react'


function MyButton2({entity}) {
    console.log();
    
  return (
    <div className='myApp'>
          <button>I'm a button 2</button>
          <p>{entity}</p>
    </div>
  )
}

export default MyButton2
