import React, { useState,useRef} from "react";
import { allCocktails } from "../utils.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  // console.log(allCocktails);
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

   useGSAP(() => {
	gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
	gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
	 xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
	})
	gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
	gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
 }, [currentIndex]);

  const goToSlide = (index) => {
    const newIndex = (index + allCocktails.length) % allCocktails.length;
    setCurrentIndex(newIndex);
  };

  const getCocktailAll = (num) => {
    return allCocktails[
      (currentIndex + num + allCocktails.length) % allCocktails.length
    ];
  };

  const currCocktail = getCocktailAll(0);
  const nextCocktail = getCocktailAll(+1);
  const prevCocktail = getCocktailAll(-1);

  console.log(getCocktailAll(0));

  return (
    <section id="menu" aria-labelledby="menu-heading">
      {/* leaft image */}
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      {/* right image */}
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />
      {/* heading */}
      <h2 className="sr-only" id="menu-heading">
        Cocktail Menu
      </h2>
      {/* munu section */}
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map(({ id, name }, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {name}
            </button>
          );
        })}
      </nav>
      {/*  */}
      <div className="content">
        <div className="arrows">
          {/* prev button */}
          <button
            className="text-right"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          {/* next button */}
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        {/* current cocktail image */}
        <div className="cocktail">
          <img src={currCocktail.image} className="object-contain" alt="" />
        </div>
        {/* Recipe */}
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currCocktail.name}</p>
          </div>
          {/*  */}
          <div className="details">
            <h2>{currCocktail.title}</h2>
            <p>{currCocktail.description}</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
