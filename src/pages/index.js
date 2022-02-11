import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import PageHeading from "~/components/styled/page-heading"
import ProductList from "~/components/product-list"
import PostList from "~/components/post-list"

const SearchPage = ({
  data: {
    allStrapiPost: { edges },
  },
}) => {
  const flatPosts = edges.map(({ node }) => node)

  const seo = { title: "Posts" }

  return (
    <Layout>
      <SEO seo={seo} />
      <PostList posts={flatPosts} />
    </Layout>
  )
}

export const searchPageQuery = graphql`
  query PostSearchQuery {
    allStrapiPost {
      edges {
        node {
          title
          subtitle
          slug
          id
          description
          image
        }
      }
    }
  }
`

export default SearchPage
