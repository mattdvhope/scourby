import React from "react"
import { graphql } from "gatsby"
import PurchaseTemplate from "~/templates/PurchaseTemplate"

const VoiceOnly = ({
  data: {
    allCosmicjsProducts: { edges }
  }
}) => <PurchaseTemplate edges={edges} imageAlt="Audio Bible Voice Only"/>

export const searchPageQuery = graphql`
  query VoiceOnlyKbpsQuery {
    allCosmicjsProducts(
      filter: {slug: {
        regex: "/scourby-voice-only-mp3/"
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

export default VoiceOnly
