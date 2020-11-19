import React from "react"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import styles from "./hero.module.scss"
import CTAButton from "../CTAButton"

function HomepageHero() {
  return (
    <section className={styles.heroSection}>
      <img src={HeroImage} alt="Vector Monitor" />
      <div className={styles.heroTitleWrapper}>
        <h2 className={styles.heroTitle}>
          <span>Don't waste time</span>
          <span>on boring things</span>
        </h2>
        <CTAButton>GO EXPLORE</CTAButton>
      </div>
      <img className={styles.heroBackground} src={HeroBackground} />
    </section>
  )
}

export default HomepageHero
