import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import PageHeading from "~/components/styled/page-heading"
import CategoryList from "~/components/category-list"

const IndexPage = ({ data: { allCosmicjsCategories } }) => {
  const categories = allCosmicjsCategories.edges
  const seo = { title: "Categories" }



  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Video categories</PageHeading>
      <CategoryList categories={categories} />
    </Layout>
  )
}

export const query = graphql`
  query CategoriesQuery {
    allCosmicjsCategories {
      edges {
        node {
          title
          id
          slug
          metadata {
            image {
              local {
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
  }
`

export default IndexPage
