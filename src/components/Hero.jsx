"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import "./Hero.css"

const Hero = () => {
  const heroRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const imagesRef = useRef(null)
  const descriptionRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
        .fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.4")
        .fromTo(
          ".hero-image",
          { y: 60, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          "-=0.3",
        )
        .fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <p className="hero-subtitle" ref={subtitleRef}>
          DESIGN.  CODE.  SOLVE.  <span className="highlight">REPEAT</span>
        </p>

        <h1 className="hero-title" ref={titleRef}>
          Bridging Silicon and Software !
        </h1>

       <div className="hero-images" ref={imagesRef}>
  <div className="hero-image">
    <img src="/images/cirtuit.png" alt="cirtuit" width={300} height={200} />
  </div>
  <div className="hero-image">
    <img src="/images/vlsi.png" alt="VLSI" width={200} height={200} />
  </div>
  <div className="hero-image">
    <img src="/images/code.png" alt="code" width={300} height={200} />
  </div>
</div>


        <p className="hero-description" ref={descriptionRef}>
          A quick learner with a keen interest in emerging technologies.
        </p>

        <div className="hero-cta" ref={ctaRef}>
          <button className="btn-primary" onClick={() => scrollToSection("work")}>
            view my work
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
