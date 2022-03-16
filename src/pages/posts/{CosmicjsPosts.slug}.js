import React from "react"
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
  const post = data.cosmicjsPosts
  const seo = {
    title: post.title,
    shareImage: post.metadata.shareImage,
  }

  return (
    <Layout>
      <SEO seo={seo} />

      {/*{post.metadata.image && (
        <div className="md:col-span-2 md:pr-4">
          <Image
            className="rounded-md"
            image={post.metadata.image}
            alt="Post Image"
          />
        </div>
      )}*/}

      <h1 className="text-3xl font-bold text-center title-setup" >{post.title}</h1>

      <YoutubeVideo src={youtubeEmbeddable(post.metadata.youtubeurl)} title={post.title} />

      <div className="my-6 mb-1">
        <div
          className="prose md:w-4/5 m-auto"
          dangerouslySetInnerHTML={{
            __html: post.content
          }}
        />
        <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
      </div>
      {post.metadata.relatedposts.length > 0 && (
        <div className="flex flex-col my-6 mb-24">
          <h2 className="text-3xl font-bold text-center">Related Posts</h2>
          <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
          <PostList
            posts={post.metadata.relatedposts}
            gridCols="grid-cols-1 md:grid-cols-2"
          />
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query CosmicPostQuery($slug: String!) {
    cosmicjsPosts(slug: {eq: $slug}) {
      title
      slug
      content
      metadata {
        subtitle
        youtubeurl
        image {
          local {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH,
                placeholder: BLURRED,
                aspectRatio: 1.3
              )
            }
          }
        }
        relatedposts {
          _id
          title
          slug
          metadata {
            image {
              local {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH,
                    placeholder: BLURRED,
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

export default PostPage
