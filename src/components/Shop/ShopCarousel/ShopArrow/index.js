import React from "react"
import styles from "./ShopArrow.module.scss"
import ArrowBig from "../../../../assets/icons/arrow-big.svg"
import clsx from "clsx"

export default function ShopArrow(props) {
  const { className, direction = "right" } = props
  console.log(props)
  const directions = {
    right: 0,
    left: 180,
  }
  return (
    <button
      disabled={className.indexOf("disabled") >= 0}
      {...props}
      className={clsx([styles.arrowButton, styles[direction]])}
    >
      <img
        src={ArrowBig}
        style={{ transform: `rotate(${directions[direction]}deg)` }}
      />
    </button>
  )
}
