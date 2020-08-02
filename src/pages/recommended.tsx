import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/layout'

interface ContentfulRecommended {}

interface Data {
  contentfulRecommended: ContentfulRecommended
}

interface RecommendedProps extends PageProps<Data> {}

const Recommended: React.FunctionComponent<RecommendedProps> = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log(data.contentfulRecommended)

  return (
    <Layout>
      <div />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    contentfulRecommended {
      id
      authors
      description
      title
      uri
    }
  }
`

export default Recommended
