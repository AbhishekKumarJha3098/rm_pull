import React from 'react';
 const GifProgressBar = ({ now, label, gifUrl, style }) => {

    const progressWidth = `${now}%`;
  return (
    <div style={{ position: 'relative', ...style }}>
      <img
        src={gifUrl}
        alt="progress-bar"
        style={{
            width: progressWidth,
            height: '100%',
            position: 'absolute',
            borderRadius: 'inherit',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          textAlign: 'center',
          transform: 'translateY(-50%)',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
      </div>
    </div>
  );
};


export default  GifProgressBar;
// Example usage

