import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import ShopArrow from "./ShopArrow"
import ShopCard from "./ShopCard"
import styles from "./ShopCarousel.module.scss"

const settings = {
  speed: 300,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <ShopArrow direction="right" />,
  prevArrow: <ShopArrow direction="left" />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export default function ShopCarousel() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/^((?!index).)*$/" } }
      ) {
        nodes {
          product: frontmatter {
            name
            slug
            price
            excerpt
            image {
              publicURL
            }
            description
            tag
          }
        }
      }
    }
  `)
  const products = data.allMarkdownRemark.nodes

  return (
    <div className={styles.shopCarouselWrapper}>
      <Slider {...settings}>
        {products.map(({ product }) => (
          <ShopCard key={product.slug} product={product} />
        ))}
      </Slider>
    </div>
  )
}
