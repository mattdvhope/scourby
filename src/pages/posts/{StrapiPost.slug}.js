import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import PostList from "~/components/post-list"
import SEO from "~/components/seo"
import Image from "~/components/image"

import { formatPrice } from "~/helpers/currency-formatter"

const PostPage = ({ data }) => {
  const post = data.strapiPost

  const seo = {
    title: post.title,
    // shareImage: post.image,
  }

  // const flexJustify = post.specifications.length > 0 ? "between" : "center"
  const flexJustify = "center"

console.log(post.title)

  return (
    <Layout>
      <SEO seo={seo} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 mt-4">
        {/*{post.image && (
          <div className="md:col-span-2 md:pr-4">
            <Image
              className="rounded-md"
              image={post.image}
              alt="Post Image"
            />
          </div>
        )}*/}

        <div className="md:col-span-2 md:pr-4">
          <img className="rounded-t-md border-gray-200   border-b" src={post.image} alt={post.title}/>
        </div>

        <h1 >{post.title}</h1>
      </div>
      <div className="my-6 mb-1">
        <ReactMarkdown
          className="prose md:w-4/5 m-auto"
          children={post.description}
        />
        <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
      </div>
      {/*{post.relatedPosts.length > 0 && (
        <div className="flex flex-col my-6 mb-24">
          <h2 className="text-3xl font-bold text-center">Related Posts</h2>
          <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
          <PostList
            posts={post.relatedPosts}
            gridCols="grid-cols-1 md:grid-cols-2"
          />
        </div>
      )}*/}
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    strapiPost(slug: { eq: $slug }) {
      id
      title
      description
      image
    }
  }
`

export default PostPage
