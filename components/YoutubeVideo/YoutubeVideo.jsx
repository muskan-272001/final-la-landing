// "use client";
// import React, { useRef } from "react";
// import YouTube from "react-youtube";
// import BoyCircle from "../BoyCircle/BoyCircle";
// import DemoClass from "../DemoClass/DemoClass";

// const YoutubeVideo = () => {
//   const videoRefs = useRef([]);

//   const handleMouseEnter = (index) => {
//     if (videoRefs.current[index]) {
//       videoRefs.current[index].getInternalPlayer().playVideo();
//     }
//   };

//   const handleMouseLeave = (index) => {
//     if (videoRefs.current[index]) {
//       videoRefs.current[index].getInternalPlayer().pauseVideo();
//     }
//   };

//   const opts = {
//     height: "300",
//     width: "500",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 0,
//       controls: 0,
//     },
//   };

//   return (
//     <>
//       <section className="youtubeClass">
//         <div className="classYoutube">
//           <YouTube
//             videoId="1FLYZdxsteo"
//             opts={opts}
//             onReady={(event) => (videoRefs.current[0] = event.target)}
//             className="w-full aspect-video self-stretch md:min-h-96 rounded-lg shadow-md"
//             onMouseEnter={() => handleMouseEnter(0)}
//             onMouseLeave={() => handleMouseLeave(0)}
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default YoutubeVideo;


"use client";
import React, { useRef, useEffect } from "react";
import YouTube from "react-youtube";
import { useInView } from "react-intersection-observer";

const YoutubeVideo = () => {
    const videoRefs = useRef([]);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
    const handleMouseEnter = (index) => {
      const iframe = videoRefs.current[index];
      if (iframe) {
        iframe.src += "&autoplay=1"; // Add autoplay when hovered
      }
    };
  
    const handleMouseLeave = (index) => {
      const iframe = videoRefs.current[index];
      if (iframe) {
        iframe.src = iframe.src.replace("&autoplay=1", ""); // Remove autoplay when not hovered
      }
    };

  return (
    <>
      <section className="youtubeClass">
        
        <div className="classYoutube">
        <iframe
          ref={(el) => (videoRefs.current[0] = el)}
          className="w-full h-full aspect-video rounded-lg shadow-md"
          src="https://www.youtube.com/embed/1FLYZdxsteo?controls=0"
          title="Product Overview Video"
          aria-hidden="true"
          loading="lazy"
          allow="autoplay"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        />
      </div>
      </section>
    </>
  );
};

export default YoutubeVideo;
