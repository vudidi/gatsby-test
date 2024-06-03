import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Article = ({ data }) => {
  const html = data.markdownRemark.html
  const title = data.markdownRemark.frontmatter.title

  const image = getImage(data.markdownRemark.frontmatter.image)

  return (
    <Layout>
      <Seo title={title} />
      <GatsbyImage image={image} alt="изображение для статьи" ></GatsbyImage>
      <div className="item-article" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>)
}

export default Article

export const query = graphql`
query Articles($url: String) {
    markdownRemark(frontmatter: {url: {eq: $url}}) {
      frontmatter {
        title
        url
        image {
            childImageSharp {
              gatsbyImageData
            }
          }
      }
      html
    }
  }
`

