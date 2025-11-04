import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktail from './components/Cocktail'
import About from './components/About'


gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
   <main>
   <Navbar/>
   <Hero/>
   <Cocktail/>
   <About/>
   {/* <div className='h-dvh bg-black'></div> */}

   </main>
  )
}

export default App