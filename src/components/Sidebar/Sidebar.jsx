import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false); // State to manage sidebar visibility

  // Handle logout
  const handleLogout = () => {
    console.log('User logged out'); // Placeholder for logout functionality
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <div className="sidebar-header">
        <img
          className="menu-icon"
          src={assets.menu_icon} 
          alt="Menu"
          onClick={toggleSidebar} // Toggle sidebar on click
        />
        <h1 className="gradient-text">
          {isMinimized ? '' : 'Welcome'}
        </h1>
      </div>
      {!isMinimized && (
        <div className="ai-features">
          <ul>
            <li className="gradient-text">Instant Responses</li>
            <li className="gradient-text">Smart Suggestions</li>
            <li className="gradient-text">Natural Language Understanding</li>
            <li className="gradient-text">Analytics and Insights</li>
            <li className="gradient-text">Secure Conversations</li>
          </ul>
        </div>
      )}
      
      {/* Bottom Buttons */}
      {!isMinimized && (
      <div className="bottom">
        
        <button className="sidebar-button" onClick={() => console.log('Help clicked')}>
          <img src={assets.question_icon} alt="Help" className="button-icon" />
          Help
        </button>
        <button className="sidebar-button" onClick={() => console.log('Settings clicked')}>
          <img src={assets.setting_icon} alt="Settings" className="button-icon" />
          Settings
        </button>
        <button className="sidebar-button" onClick={() => console.log('Activity clicked')}>
          <img src={assets.history_icon} alt="Activity" className="button-icon" />
          Activity
        </button>
      </div>
      )}
    </div>
  );
}

export default Sidebar;