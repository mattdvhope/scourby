import React from "react"
import { graphql } from "gatsby"
import { fbq } from '@hutsoninc/gatsby-plugin-facebook-pixel';
import Layout from "~/components/layout"
import Image from "~/components/image"
import "~/styles/global.css";

const PurchaseTemplate = ({edges, imageAlt}) =>
  <Layout>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 mt-4" style={{ marginTop: `-65px` }}>
      {edges.map(({node}) => {
        return (
          <div className="enclosed-product" key={node.id}>
            <a
              href={node.metadata.sub_product_characteristic.product_link}
              onClick={() => {
                fbq('track', 'PageView'); // see https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking/ "Custom Conversions"
              }}
            >
              <div className="grid md:grid-cols-2 gap-4 mb-3 mt-4">
                <Image
                  className="audio-bible-image"
                  alt={imageAlt}
                  image={node.metadata.image}
                />
                <p className="product-title text-center">{node.title}</p>
              </div>
            </a>
            <div
              className="prose md:w-4/5 m-auto"
              dangerouslySetInnerHTML={{
                __html: node.content
              }}
            />
          </div>
        )
      })}
    </div>
  </Layout>

export default PurchaseTemplate
