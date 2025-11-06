import React from "react";
import {navLinks} from "../utils.js"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const Navbar = () => {

    useGSAP(()=>{
        const navTween=gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:"bottom top",
                // mark:true
            }
        })

        navTween.fromTo("nav",{backgroundColor:"transparent"},{
            backgroundColor:"#00000050",
            backgroundFilter:"blur(10px)",
            duration:1,
            ease:"power1.inOut"
        })
    })

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
            <img src="images/logo2.png" className="w-20" alt="logo" />
          {/* <p>Tapal Tea</p> */}
        </a>

        <ul>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a href={id}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
