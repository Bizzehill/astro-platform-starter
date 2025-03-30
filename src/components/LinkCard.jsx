import React from 'react';

const LinkCard = ({ title, url, imageUrl }) => {
  // Extract location name and ID number
  const locationMatch = title.match(/^(.+?)\s*\((\d+)\)$/);
  const locationName = locationMatch ? locationMatch[1] : title;
  const locationId = locationMatch ? locationMatch[2] : "";

  // Determine background color based on ID number
  // This creates a visual differentiation between cards while keeping them Stanley Steemer-branded
  const getBackgroundColor = () => {
    if (!locationId) return "#FFC107"; // Default yellow for Stanley Steemer
    
    // Create a hash of the location ID for consistent color
    const idNum = parseInt(locationId);
    const colorIndex = idNum % 4;
    
    // Use yellow-based colors for Stanley Steemer brand consistency
    const colors = [
      "#FFC107", // Standard yellow
      "#FFD54F", // Lighter yellow
      "#FFA000", // Amber
      "#FFECB3"  // Very light yellow
    ];
    
    return colors[colorIndex];
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block rounded overflow-hidden transform transition-transform hover:scale-105 shadow-md"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="p-3 text-center">
        <div className="text-sm font-medium text-gray-900 truncate" style={{ maxWidth: "100%" }}>
          {locationName}
        </div>
        {locationId && (
          <div className="text-xs text-gray-800">#{locationId}</div>
        )}
      </div>
    </a>
  );
};

export default LinkCard;