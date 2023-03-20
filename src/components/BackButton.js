import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const BackButton = () => {
    return (
      <div className='absolute mt-4 ml-2 z-50'>
        
          <button><a href='https://georgianit.github.io/portfolio-project/'><ArrowBackIcon style={{ color: 'white', width: '40px', height: '40px' }}/></a></button>
        
    </div>
  )
}

export default BackButton