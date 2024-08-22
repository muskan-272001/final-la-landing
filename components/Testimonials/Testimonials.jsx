// // "use client";

// // import Image from "next/image";
// // import React, { useRef, useState } from "react";
// // // import CurriculumHomeImg from "../public/assets/curriculumHomeImg.webp";
// // import CurriculumHomeImg from "../../public/assets/curriculumHomeImg.webp";
// // import OnlineLearningHomeImg from "../../public/assets/OnlineLearningHomeImg.webp";
// // import YouTube from "react-youtube";


// // const Testimonials = () => {
// //     const opts = {
// //         height: "100%",
// //         width: "100%",
// //         playerVars: {
// //           autoplay: 1,
// //           controls: 0, // Hide video controls
// //           disablekb: 1, // Disable keyboard controls
// //           fs: 0, // Hide fullscreen button
// //           rel: 0, // Don't show related videos at the end
// //           showinfo: 0, // Hide video title and uploader information
// //         },
// //       };
  
// //       const optsLinks = {
// //         height: "100%",
// //         width: "100%",
// //         playerVars: {
// //           autoplay: 1,
// //           controls: 0, // Hide video controls
// //           disablekb: 1, // Disable keyboard controls
// //           fs: 0, // Hide fullscreen button
// //           rel: 0, // Don't show related videos at the end
// //           showinfo: 0, // Hide video title and uploader information
// //           mute: 1, // Mute the video (disable sound)
// //         },
// //       };

// //   const videoRefs = useRef([]);
// //   const [hoveredIndex, setHoveredIndex] = useState(null);

// //   const handleMouseEnter = (index) => {
// //     const iframe = videoRefs.current[index];
// //     if (iframe) {
// //       iframe.src += "&autoplay=1"; // Add autoplay when hovered
// //     }
// //     setHoveredIndex(index);
// //   };

// //   const handleMouseLeave = (index) => {
// //     const iframe = videoRefs.current[index];
// //     if (iframe) {
// //       iframe.src = iframe.src.replace("&autoplay=1", ""); // Remove autoplay when not hovered
// //     }
// //     setHoveredIndex(null);
// //   };

// //   return (
// //     <>
// //       <div className="testimonials flex gap-10 mt-20 mb-10">
// //         <div className="w-1/4">
// //           {/* <Image src={CurriculumHomeImg} alt="little-aryans" /> */}
// //           <div className="otherPageLinkImg">
// //                     <Image src={CurriculumHomeImg} alt="little-aryans" />
// //                   </div>
// //         </div>
// //         <div className="w-1/4">
// //           {/* <iframe
// //             ref={(el) => (videoRefs.current[1] = el)}
// //             className="w-full h-full aspect-video rounded-lg shadow-md"
// //             src="https://www.youtube.com/embed/1FLYZdxsteo?controls=0"
// //             frameBorder="0"
// //             title="Product Overview Video"
// //             aria-hidden="true"
// //             loading="lazy"
// //             allow="autoplay"
// //             onMouseEnter={() => handleMouseEnter(1)}
// //             onMouseLeave={() => handleMouseLeave(1)}
// //           /> */}
// //            <div className="otherPageLinkImg">
// //                     <YouTube
// //                       className="videotag"
// //                       videoId="4KKqEkjOVzI"
// //                       opts={optsLinks}
// //                       loading="lazy"
// //                     />
// //                   </div>
// //         </div>
// //         <div className="w-1/4">
// //         <div className="otherPageLinkImg">

// //         <Image src={OnlineLearningHomeImg} alt="little-aryans" />
// //         </div>
// //         </div>
// //         <div className="w-1/4">
// //         <div className="otherPageLinkImg">

// //         <Image src={OnlineLearningHomeImg} alt="little-aryans" />
// //         </div>
// //         </div>
// //       </div>

// //       <div class="container mx-auto">
// //         <div class="flex flex-wrap">
// //           <div class="w-full sm:w-1/4 p-2">
// //             <div className="boxes">
// //               <p>Mr. Mohit Srivastaava, Viraj's father - Batch of 2024-25</p>
// //             </div>
// //           </div>
// //           <div class="w-full sm:w-1/4 p-2">
// //             <div className="boxes">
// //               <p>Mrs. Yashogandha Jadhav, Ishani Jadhav's mother - Batch of 2024-25</p>
// //             </div>
// //           </div>
// //           <div class="w-full sm:w-1/4 p-2">
// //             <div className="boxes">
// //               <p>Mrs. Rohini Salekar,mother of Saanvi - Batch of 2024-25</p>
// //             </div>
// //           </div>
// //           <div class="w-full sm:w-1/4 p-2">
// //             <div className="boxes">
// //               <p>Mr. Mayuresh Kolhe, father of Gururaj Kolhe - Batch of 2024-25</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Testimonials;


// "use client";

// import Image from "next/image";
// import React from "react";
// import ReactPlayer from "react-player";
// import CurriculumHomeImg from "../../public/assets/curriculumHomeImg.webp";
// import OnlineLearningHomeImg from "../../public/assets/OnlineLearningHomeImg.webp";

// const Testimonials = () => {
//   return (
//     <>
//       <div className="testimonials flex flex-wrap gap-4 mt-20 mb-10">
//         <div className="w-1/3 p-2">
//           <div className="aspect-w-1 aspect-h-1">
//             {/* <Image src={CurriculumHomeImg} alt="Curriculum Home" layout="fill" objectFit="cover" /> */}
//             <ReactPlayer
//               url="../public/assets/videos/second.mp4" // Local video file
//               width="150px"
//               height="200px"
//               controls
//             />
//           </div>
//         </div>
//         <div className="w-1/3 p-2">
//           <div className="aspect-w-1 aspect-h-1">
//             <ReactPlayer
//               url="../public/assets/videos/second.mp4" // Local video file
//               width="150px"
//               height="200px"
//               controls
//             />
//           </div>
//         </div>
//         <div className="w-1/3 p-2">
//           <div className="aspect-w-1 aspect-h-1">
//             {/* <Image src={OnlineLearningHomeImg} alt="Online Learning Home" layout="fill" objectFit="cover" /> */}
//             <ReactPlayer
//               url="/videos/sample1.mp4" // Local video file
//               width="150px"
//               height="200px"
//               controls
//             />
//           </div>
//         </div>
//         <div className="w-1/3 p-2">
//           <div className="aspect-w-1 aspect-h-1">
//             <ReactPlayer
//               url="/videos/sample2.mp4" // Local video file
//               width="150px"
//               height="200px"
//               controls
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto">
//         <div className="flex flex-wrap">
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mr. Mohit Srivastaava, Viraj's father - Batch of 2024-25</p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mrs. Yashogandha Jadhav, Ishani Jadhav's mother - Batch of 2024-25</p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mrs. Rohini Salekar, mother of Saanvi - Batch of 2024-25</p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mr. Mayuresh Kolhe, father of Gururaj Kolhe - Batch of 2024-25</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonials;



// "use client";

// import React from "react";
// import ReactPlayer from "react-player";

// const Testimonials = () => {
//   return (
//     <>
//       {/* <div className="testimonials flex flex-wrap gap-4 mt-20 mb-10">
//         <div className="w-1/3 p-2">
//           <div className="aspect-w-1 aspect-h-1">
//             <ReactPlayer
//               url="/assets/videos/second.mp4" // Corrected path
//               width="150px"
//               height="200px"
//               controls
//             />
//           </div>
//         </div>
//         <div className="w-1/3 p-2">
//           <div className="aspect-w-1 aspect-h-1">
//             <ReactPlayer
//               url="/assets/videos/second.mp4" // Corrected path
//               width="150px"
//               height="200px"
//               controls
//             />
//           </div>
//         </div>
//         <div className="w-1/3 p-2">
//           <div className="aspect-w-1 aspect-h-1">
//             <ReactPlayer
//               url="/assets/videos/third.mp4" // Corrected path
//               width="150px"
//               height="200px"
//               controls
//             />
//           </div>
//         </div>
//         <div className="w-1/3 p-2">
//           <div className="aspect-w-1 aspect-h-1">
//             <ReactPlayer
//               url="/assets/videos/last.mp4" // Corrected path
//               width="150px"
//               height="200px"
//               controls
//             />
//           </div>
//         </div>
//       </div> */}

// <div className="testimonials gap-10 mt-20 mb-3">
//         <div className="flex flex-wrap">
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxesVideos">
//               <ReactPlayer
//               url="/assets/videos/second.mp4" // Corrected path
//               width="200px"
//               height="300px"
//               controls
//             />
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxesVideos">
//             <ReactPlayer
//               url="/assets/videos/second.mp4" // Corrected path
//               width="200px"
//               height="300px"
//               controls
//             />
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxesVideos">
//             <ReactPlayer
//               url="/assets/videos/third.mp4" // Corrected path
//               width="200px"
//               height="300px"
//               controls
//             />
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxesVideos">
//             <ReactPlayer
//               url="/assets/videos/last.mp4" // Corrected path
//               width="200px"
//               height="300px"
//               controls
//             />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto">
//         <div className="flex flex-wrap">
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mr. Mohit Srivastaava, Viraj's father - Batch of 2024-25</p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mrs. Yashogandha Jadhav, Ishani Jadhav's mother - Batch of 2024-25</p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mrs. Rohini Salekar, mother of Saanvi - Batch of 2024-25</p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mr. Mayuresh Kolhe, father of Gururaj Kolhe - Batch of 2024-25</p>
//             </div>
//           </div>
//         </div>
//       </div>




     
//     </>
//   );
// };

// export default Testimonials;



// import React from 'react';
// import HoverVideoPlayer from '../ReactPlayer'; // Import your custom component

// const Testimonials = () => {
//   return (
//     <>
//       <div className="testimonials gap-10 mt-20 mb-3">
//         <div className="flex flex-wrap">
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxesVideos">
//               <HoverVideoPlayer
//                 url="/assets/videos/second.mp4"
//                 width="200px"
//                 height="300px"
//               />
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxesVideos">
//               <HoverVideoPlayer
//                 url="/assets/videos/second.mp4"
//                 width="200px"
//                 height="300px"
//               />
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxesVideos">
//               <HoverVideoPlayer
//                 url="/assets/videos/third.mp4"
//                 width="200px"
//                 height="300px"
//               />
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxesVideos">
//               <HoverVideoPlayer
//                 url="/assets/videos/last.mp4"
//                 width="200px"
//                 height="300px"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto">
//         <div className="flex flex-wrap">
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mr. Mohit Srivastaava, Viraj's father - Batch of 2024-25</p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mrs. Yashogandha Jadhav, Ishani Jadhav's mother - Batch of 2024-25</p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mrs. Rohini Salekar, mother of Saanvi - Batch of 2024-25</p>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/4 p-2">
//             <div className="boxes">
//               <p>Mr. Mayuresh Kolhe, father of Gururaj Kolhe - Batch of 2024-25</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonials;



import React from 'react';
import HoverVideoPlayer from '../ReactPlayer'; // Import your custom component

const Testimonials = () => {
  return (
    <>
      <div className="testimonials gap-10 mt-20 mb-3 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
            <div className="boxesVideos">
              <HoverVideoPlayer
                url="/assets/videos/second.mp4"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
            <div className="boxesVideos">
              <HoverVideoPlayer
                url="/assets/videos/second.mp4"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
            <div className="boxesVideos">
              <HoverVideoPlayer
                url="/assets/videos/third.mp4"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
            <div className="boxesVideos">
              <HoverVideoPlayer
                url="/assets/videos/last.mp4"
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <div className="boxes">
              <p>Mr. Mohit Srivastaava, Viraj's father - Batch of 2024-25</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <div className="boxes">
              <p>Mrs. Yashogandha Jadhav, Ishani Jadhav's mother - Batch of 2024-25</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <div className="boxes">
              <p>Mrs. Rohini Salekar, mother of Saanvi - Batch of 2024-25</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <div className="boxes">
              <p>Mr. Mayuresh Kolhe, father of Gururaj Kolhe - Batch of 2024-25</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
