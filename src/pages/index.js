import React from "react"
import Hero from "components/Hero"
import Shop from "components/Shop"
import SEO from "components/SEO"

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Shop />
    </>
  )
}
