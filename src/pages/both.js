import React from "react"
import { graphql } from "gatsby"
import PurchaseTemplate from "~/templates/PurchaseTemplate"

const Both = ({
  data: {
    allCosmicjsProducts: { edges }
  }
}) => <PurchaseTemplate edges={edges} imageAlt="Audio Bible Both"/>

export const searchPageQuery = graphql`
  query BothKbpsQuery {
    allCosmicjsProducts(
      filter: {slug: {
        regex: "/scourby-voice-only-and-dramatized/"
      }}
    ) {
      edges {
        node {
          id
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

export default Both
