import React from 'react'
import './Home.css'
import Pic from './anime.gif'
const navbar = () => {
  return (
    <>
     <div className='top'>
        <div className='header'>
          <div className='logo'>
            <span>Programmer</span>
          </div>
          <div className='navList'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Code</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='banner'>
      <div className='leftSide'> 
      BUILDING BETTER SOLUTIONS THROUGH CODE
      </div>
      <div className='rightSideImg'>
      </div>
      </div>
      <div className='scrollDownBanner'>
        <div className='scrollDownLeft'>
          <img src={Pic}/>
        </div>
        <div className='scrollDownRight'>
        With our expert tutorials and community of like-minded individuals, you'll have the resources and support you need to take your coding skills to the next level.
        </div>
      </div>
   </>
     
    
      )
}

      export default navbar
