import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close.jpg';

export function Notifications() {
  return (
    <div className="Notifications" style={{ position: 'relative', padding: '20px' }}>
      <p style={{ display: 'inline', marginRight: '80%' }}>Here is the list of notifications</p>
      <button
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <img 
          style={{ display: 'inline', width: '20px', height: '20px' }} 
          src={closeIcon} 
          alt='Close' 
        />
      </button>
      <ul>
        <li data='default'>New course available</li>
        <li data='urgent'>New resume available</li>
        <li
          data='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
