import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: { html },
        },
      ],
    },
  },
}) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default IndexPage
