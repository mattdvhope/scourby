import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import PostList from "~/components/post-list"
import SEO from "~/components/seo"
import Image from "~/components/image"
import "~/styles/global.css";
import YoutubeVideo from "~/templates/YoutubeVideo";
import { youtubeEmbeddable } from "~/utils/youtubeEmbeddable";

import { formatPrice } from "~/helpers/currency-formatter"

const PostPage = ({ data }) => {
  const post = data.strapiPost

  const seo = {
    title: post.title,
    // shareImage: post.image,
  }

  // const flexJustify = post.specifications.length > 0 ? "between" : "center"
  const flexJustify = "between"

  return (
    <Layout>
      <SEO seo={seo} />

      {post.image && (
        <div className="md:col-span-2 md:pr-4">
          <Image
            className="rounded-md"
            image={post.image}
            alt="Post Image"
          />
        </div>
      )}
      
      <div className="container-fluid blog-container">
        <div className="blog-content">
          <YoutubeVideo src={youtubeEmbeddable(post.youtubeUrl)} title={post.title} />
        </div>
      </div>



      <h1 >{post.title}</h1>
      <div className="my-6 mb-1">
        <ReactMarkdown
          className="prose md:w-4/5 m-auto"
          children={post.description}
        />
        <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    strapiPost(slug: { eq: $slug }) {
      id
      title
      subtitle
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
      youtubeUrl
    }
  }
`

export default PostPage
