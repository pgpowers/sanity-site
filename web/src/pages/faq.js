import React from 'react'
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown';
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query FAQPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
    }
    faqText: sanityFaqText(_id: {eq: "faqText"}) {
      pageText
    }
  }
`

const FAQPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = data?.site
  const faqText = data?.faqText.pageText

  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
      <Container>
        <ReactMarkdown children={faqText} />
      </Container>
    </Layout>
  )
}

export default FAQPage
