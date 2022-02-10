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
    shareImage: post.image,
  }

  const flexJustify = post.specifications.length > 0 ? "between" : "center"

  return (
    <Layout>
      <SEO seo={seo} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 mt-4">
        {post.image && (
          <div className="md:col-span-2 md:pr-4">
            <Image
              className="rounded-md"
              image={post.image}
              alt="Post Image"
            />
          </div>
        )}
        <div className={`flex flex-col justify-${flexJustify}`}>
          <div className="mb-4">
            <h1 className="text-4xl mb-1">{post.title}</h1>
            {post.price && (
              <div className="text-sm flex justify-between">
                <p className="font-extralight">Price</p>
                <p>{formatPrice(post.price)}</p>
              </div>
            )}
          </div>
          <div className="w-full">
            {post.specifications &&
              post.specifications.map((spec, index) => (
                <div
                  className="w-full flex text-sm justify-between items-between border-b mb-2 pb-1"
                  key={`${spec.key}-${index}`}
                >
                  <span className="font-extralight">{spec.key}</span>
                  <span>{spec.value}</span>
                </div>
              ))}
          </div>
          <a
            href={post.dealerUrl}
            target="_blank"
            rel="noreferrer"
            className="p-4 text-center font-medium rounded-md border-2 mt-4"
          >
            Shop Online
          </a>
        </div>
      </div>
      <div className="my-6 mb-24">
        <h1 className="text-4xl font-bold text-center">Post Description</h1>
        <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
        <ReactMarkdown
          className="prose md:w-4/5 m-auto"
          children={post.description}
        />
      </div>
      {post.relatedPosts.length > 0 && (
        <div className="flex flex-col my-6 mb-24">
          <h2 className="text-3xl font-bold text-center">Related Posts</h2>
          <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
          <PostList
            posts={post.relatedPosts}
            gridCols="grid-cols-1 md:grid-cols-2"
          />
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    strapiPost(slug: { eq: $slug }) {
      title
      description
      id
    }
  }
`

export default PostPage
