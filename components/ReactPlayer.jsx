import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const HoverVideoPlayer = ({ url, width, height }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="video-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef}
        url={url}
        width={width}
        height={height}
        playing={isPlaying}
        controls
      />
    </div>
  );
};

export default HoverVideoPlayer;
