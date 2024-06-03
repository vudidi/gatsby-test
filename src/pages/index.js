import * as React from "react"
import { Link, graphql } from "gatsby"
import articlesIcon from '../images/favicon.png'

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {

  const articles = data.allMarkdownRemark.nodes

  return (<Layout>
    <div className={styles.textCenter}>
      <img src={articlesIcon} alt="иконка для списка статей" className="main-icon"></img>
      <h1>
        Articles
      </h1>
    </div>
    <ul className={styles.list}>
      {articles.map(article => (
        <li key={article.frontmatter.url} className={styles.listItem}>
          <Link to={article.frontmatter.url}> {article.frontmatter.title} </Link>
        </li>
      ))}
    </ul>
  </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query Articles {
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        title
        url
      }
    }
  }
}
`
