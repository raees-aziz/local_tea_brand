import React from "react";
import { openingHours, socials } from "../utils.js";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
    gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "chars",
    });

    const timeline = gsap.timeline({
      ScrollTrigger: {
        trigger: "#contact",
        top: "top center",
        // scrub:true,
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.chars, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to('#f-right-leaf',{
        y:'-50',duration:1,ease:'power1.inOut'
      })
      .to('#f-left-leaf',{
        y:'-50',duration:1,ease:'power1.inOut'
      })
  }, []);

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>House No # xyz sector D/10, Surjani Town, Karachi</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>(555) 00000000</p>
          <p>hello@gmail.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map(({ day, time }) => (
            <p key={day}>
              {day} : {time}
            </p>
          ))}
        </div>
        <div>
          <h3>Social</h3>

          <div className="flex-center gap-5">
            {socials.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
