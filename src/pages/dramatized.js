import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "~/components/layout"
import Image from "~/components/image"
import "~/styles/global.css";


const Dramatized = ({
  data: {
    allCosmicjsProducts: { edges }
  }
}) => {
  return (
    <Layout>
      <div className="centered-div" style={{ marginTop: `-40px` }}>
        <Image
          className="audio-bible-voice-only-image??????"
          alt="Audio Bible Dramatized"
          image={edges[0].node.metadata.image}
        />
        {edges.map(({node}) => {
          return (
            <a href={node.metadata.sub_product_characteristic.product_link}>
              <h3>{node.title}</h3>
              <br/>
              <hr/>
              <br/>
            </a>
          )
        })}
      </div>
    </Layout>
  )
}

export const searchPageQuery = graphql`
  query DramatizedKbpsQuery {
    allCosmicjsProducts(
      filter: {slug: {
        regex: "/scourby-dramatized-kjv-mp3/"
      }}
    ) {
      edges {
        node {
          title
          content
          metadata {
            sub_product_characteristic {
              disctinctive_characteristic
              price
              product_link
            }
            image {
              local {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH,
                    placeholder: BLURRED,
                    aspectRatio: 1.4278
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

export default Dramatized
