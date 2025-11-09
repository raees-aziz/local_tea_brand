import React from "react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText, ScrollTrigger )

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars,word" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: "0.06",
      delay: 1,
    });

    gsap
      .timeline({
        ScrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 2,
          markers: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
    // .to(".title",{y:700},0)
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    // console.log(videoRef.current)

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        // scale:1.3
      });
    };
  });

  return (
    <>
      <section id="hero" className="">
        <h1 className="title">TAPAL</h1>
        <img
          className="left-leaf"
          src="images/hero-left-leaf.png"
          alt="left-leaf"
        />
        <img
          className="right-leaf"
          src="images/hero-right-leaf.png"
          alt="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Hot. Crisp. Classic.</p>
              <p className="subtitle">
                Where every detail matters <br />
               from leaf to pour
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cup we pour reflects our devotion to perfection — from the first leaf to the final pour. That care is what transforms a simple tea into a truly memorable experience
              </p>
              <a href="#cocktails">View Product</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/coffee-output.mp4"
          muted
          // playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
