import React from "react"

import HeroBackground from "assets/elements/hero_background.svg"
import HeroImage from "assets/elements/monitor.svg"
import styles from "./Hero.module.scss"
import CTAButton from "components/CTAButton"
import { motion } from "framer-motion"

const h2variants = {
  initial: {
    x: 80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.15,
      ease: [0.5, 0.05, -0.01, 0.9],
    },
  },
}

const spanVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

function HomepageHero() {
  return (
    <section className={styles.heroSection}>
      <motion.img
        className={styles.heroImage}
        initial={{
          x: 80,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        src={HeroImage}
        alt="Vector Monitor"
      />
      <div className={styles.heroTitleWrapper}>
        <motion.h2
          initial="initial"
          animate="animate"
          variants={h2variants}
          className={styles.heroTitle}
        >
          <motion.span variants={spanVariants}>Don't waste time</motion.span>
          <motion.span variants={spanVariants}>on boring things</motion.span>
          <span />
        </motion.h2>
        <CTAButton>GO EXPLORE</CTAButton>
      </div>
      <img className={styles.heroBackground} src={HeroBackground} />
    </section>
  )
}

export default HomepageHero
