import React from "react"
import styles from "./ShopArrow.module.scss"
import ArrowBig from "../../../../assets/icons/arrow-big.svg"
import clsx from "clsx"

export default function ShopArrow({ currentSlide, slideCount, ...props }) {
  const { className, direction = "right" } = props
  const directions = {
    right: 0,
    left: 180,
  }
  return (
    <button
      {...props}
      disabled={className.indexOf("disabled") >= 0}
      className={clsx([styles.arrowButton, styles[direction]])}
    >
      <img
        src={ArrowBig}
        style={{ transform: `rotate(${directions[direction]}deg)` }}
      />
    </button>
  )
}
