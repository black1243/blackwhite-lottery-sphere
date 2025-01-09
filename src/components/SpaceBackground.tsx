import React from 'react';

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Black Hole Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/cae1a6d4-acf2-4b8a-b305-56c08d12833d.png)',
          filter: 'brightness(0.8)'
        }} 
      />
      
      {/* Additional Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};