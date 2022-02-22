import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import PageHeading from "~/components/styled/page-heading"
import PostList from "~/components/post-list"
import SEO from "~/components/seo"

const CategoryPage = ({ data }) => {
  const posts = data.cosmicjsCategories.metadata.posts
  const seo = {
    title: data.cosmicjsCategories.title,
  }

  return (
    <Layout>
      <SEO seo={seo} />
      <div>
        <PageHeading>{data.cosmicjsCategories.title}</PageHeading>
        <PostList posts={posts} />
      </div>
    </Layout>
  )
}

export const query = graphql`
	query CategoryQuery($slug: String!) {
	  cosmicjsCategories(slug: {eq: $slug}) {
	    title
	    metadata {
	      posts {
	        title
	        slug
	        _id
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

export default CategoryPage
