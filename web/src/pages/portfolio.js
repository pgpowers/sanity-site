import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import PortfolioItem from '../components/portfolioItem';
import styles from '../components/portfolioItem.module.css';

export const query = graphql`
  query PortfolioPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    },
    portfolioItems: allSanityPortfolioItem {
      edges {
        node {
          _id
          title
          image {
            asset {
              url
            }
          }
          description
          }
        }
      }
    }
`

const PortfolioGrid = ({children}) => {
  return <div className={styles.portfolioGrid}>
    {children}
  </div>;
}

const PortfolioPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = data?.site;
  const portfolioItems = data?.portfolioItems?.edges;
  console.log(portfolioItems)

  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
      <Container>
        <h1>Portfolio</h1>
        <PortfolioGrid>
          {portfolioItems.map(item => {
            return <PortfolioItem _id={item.node._id} title={item.node.title} image={item.node.image} description={item.node.description} />
          })}
        </PortfolioGrid>
      </Container>
    </Layout>
  )
}

export default PortfolioPage
