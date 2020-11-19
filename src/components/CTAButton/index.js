import React from "react"
import styles from "./cta-button.module.scss"

export default function CTAButton({ children, ...props }) {
  return (
    <button className={styles.ctaButton} {...props}>
      {children}
    </button>
  )
}
