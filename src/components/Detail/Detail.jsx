import React from 'react'
import './detail.css'
import { auth } from '../../lib/firebase'
const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                
              <img src="img 1.jpg" alt="" />
              <span>Photo_2024.png</span>
              </div>
            <img  className='icon'src="download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                
              <img src="img 1.jpg" alt="" />
              <span>Photo_2024.png</span>
              </div>
            <img className='icon' src="download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                
              <img src="img 1.jpg" alt="" />
              <span>Photo_2024.png</span>
              </div>
            <img className='icon' src="download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                
              <img src="public/img 1.jpg" alt="" />
              <span>Photo_2024.png</span>
              </div>
            <img className='icon' src="download.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      <button className='block'>Block User</button>
      <button className='logout' onClick={()=> auth.signOut()}>LogOut</button>
      </div>
    </div>
  )
}

export default Detail