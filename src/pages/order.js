import React from "react"
import { graphql } from "gatsby"
import PurchaseTemplate from "~/templates/PurchaseTemplate"

const Order = ({
  data: {
    allCosmicjsProducts: { edges }
  }
}) => <PurchaseTemplate edges={edges} imageAlt="Scourby Audio Product"/>

export const searchPageQuery = graphql`
  query OrderQuery {
    allCosmicjsProducts (
      sort: {
        order: ASC, 
        fields: order
      }
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

export default Order
