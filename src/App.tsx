import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <div className="logo-img"></div>
        <div className="menu">
          <div className='menu-item'>SHOW ALL TYRES</div>
          <div className='menu-item'>FIND A DEALER</div>
          <div className='menu-item'>GUIDES & VIDEOS</div>
          <div className='menu-item'>GO WITH</div>
          <div className='menu-item'>SERVICE & HELP</div>
        </div>
      </div>
      <div className="land-section">
        <div className='land-container'>
          <div className="land-title">Nothing can stop<br></br>
            you</div>
          <div className="find-button">Find out more</div>
        </div>
      </div>
      <div className="blog-section">
        <div className="blog-title">Featured Products</div>
        <div className="blog-content">
          <button className="arrow-left">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                fill='white'
              />
            </svg>
          </button>
          <div className="card">
            <div className="card-title">ICEWAYS</div>
            <div className="card-content">
              City life is changing. So are the habits of urban citizens. 4*4 cars that were previously used only on challenging lands are now preferred for urban use.
            </div>
            <div className="card-footer">
              <div className="footer-button-left">LERAN MORE</div>
              <div className="footer-button-right">Find A DEALER</div>
            </div>
          </div>
          <div className="card">
            <div className="card-container">
              <div className="card-title">DRIVEWAYS SPORT</div>
              <div className="card-content">
                Driveways is a "Comfort tyre" developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.
              </div>
              <div className="card-footer">
                <div className="footer-button-left">LERAN MORE</div>
                <div className="footer-button-right">Find A DEALER</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-container">
              <div className="card-title">DRIVEWAYS COMPETUS H/P</div>
              <div className="card-content">
                City life is changing. So are the habits of urban citizens. 4*4 cars that were previously used only on challenging lands are now preferred for urban use.
              </div>
              <div className="card-footer">
                <div className="footer-button-left">LERAN MORE</div>
                <div className="footer-button-right">Find A DEALER</div>
              </div>
            </div>
          </div>
          <button className="arrow-right">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="status">
          <div className='active-status'></div>
          <div className='inactive-status'></div>
          <div className='inactive-status'></div>
        </div>
      </div>
      <div className="video-section">
        <div className="video-header">
          <div className="video-title">Feel the excellent wet braking<br></br> with driveways!</div>
          <div className="video-watch-button">WATCH ALL VIDEOS</div>
        </div>
        <video className="video-display" controls src=""></video>
      </div>
    </div>
  );
}

export default App;
