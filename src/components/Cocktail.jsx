import React from "react";
import { cocktailLists,mockTailLists} from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cocktail = () => {

useGSAP(()=>{
const parallaxTimeline=gsap.timeline({
  scrollTrigger:{
    trigger:'#cocktails',
    start:'top 30%',
    end:"bottom 50%",
    scrub:true,
    // stagger
    // markers:true
  }
})

parallaxTimeline.from('#c-left-leaf',{x:-100,y:100})
.from('#c-right-leaf', {
		x: 100, y: 100
	})
},[])

  return (
    <section id="cocktails" className="">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="l-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Tea:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Love */}
        <div className="loved">
          <h2>Most loved Tea:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                     | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
