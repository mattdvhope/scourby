import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import PageHeading from "~/components/styled/page-heading"
import ProductList from "~/components/product-list"
import PostList from "~/components/post-list"

const SearchPage = ({
  data: {
    allStrapiProduct: { edges },
  },
}) => {
  const flatProducts = edges.map(({ node }) => node)

  const seo = { title: "Products" }

  return (
    <Layout>
      <SEO seo={seo} />
      <ProductList products={flatProducts} />
    </Layout>
  )
}

export const searchPageQuery = graphql`
  query ProductSearchQuery {
    allStrapiProduct {
      edges {
        node {
          title
          slug
          id
          description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  aspectRatio: 1.3
                )
              }
            }
          }
        }
      }
    }
  }
`

export default SearchPage
