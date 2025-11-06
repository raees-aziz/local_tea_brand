import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SmoothVideoScroll = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.onloadedmetadata = () => {
      // GSAP timeline controlling video playback
      gsap.to(video, {
        currentTime: video.duration, // play full video
        ease: "none", // no easing for smooth linear scroll
        scrollTrigger: {
          trigger: video,
          start: "top top",
          end: "bottom+=2000 top", // length of scroll area
          scrub: true, // sync video with scroll
          pin: true, // keep video fixed while scrolling
          markers: true, // remove later
        },
      });
    };
  }, []);

  return (
    <div>
      <section className="h-screen bg-gray-900 flex items-center justify-center">
        <h1>Scroll Down to Play Video</h1>
      </section>

      <section>
        <video
          ref={videoRef}
          src="/videos/coffee.mp4"
          playsInline
          preload="auto"
          muted
          className="w-full h-screen object-cover"
        />
      </section>

      <section className="h-screen bg-gray-900 flex items-center justify-center">
        <h1>End of Scroll Animation</h1>
      </section>
    </div>
  );
};

export default SmoothVideoScroll;
