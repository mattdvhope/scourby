import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Card from "~/components/styled/card"
import Image from "~/components/image"

const PostList = ({ posts, gridCols }) => {

  // posts.map(post => {console.log("post", post)})

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {posts.map(post => {
        const postId = post._id || post.id
        return (
          <Card key={postId}>
            <Link to={`/posts/${post.slug}`} key={postId}>
              <Image
                alt={post.title}
                className="rounded-t-md border-gray-200	 border-b"
                image={post.image || post.metadata.image}
              />
              <div className="px-4 py-6">
                <p>{post.title}</p>
                <p className="text-xs self-end">
                  {post.subtitle || post.metadata.subtitle}
                </p>
              </div>
            </Link>
          </Card>
        )
      })}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array,
  gridCols: PropTypes.string,
}

PostList.defaultProps = {
  gridCols: "grid-cols-1 md:grid-cols-3",
}

export default PostList
