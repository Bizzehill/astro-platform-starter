import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    // Clear cookies by setting expiration in the past
    document.cookie = 'authenticated=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'userEmail=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div className="text-center my-4">
      <button 
        onClick={handleLogout}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-800 text-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
